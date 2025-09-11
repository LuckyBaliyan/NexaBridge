import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [events, setEvents] = useState([]);

  // Safe load on mount
  useEffect(() => {
    try {
      const savedRole = localStorage.getItem("role");
      const savedUser = localStorage.getItem("currentUser");
      const savedEvents = localStorage.getItem("events");

      if (savedRole) setRole(savedRole);
      if (savedUser) {
        try {
          setCurrentUser(JSON.parse(savedUser));
        } catch {
          setCurrentUser(null);
        }
      }

      if (savedEvents) {
        try {
          const parsed = JSON.parse(savedEvents);
          if (Array.isArray(parsed)) {
            setEvents(
              parsed.map((ev) => ({
                ...ev,
                participants: ev.participants || [],
                requests: ev.requests || [],
                status: ev.status || computeStatus(ev.date, ev.time, ev.endDate),
              }))
            );
          }
        } catch (err) {
          console.error("Error parsing events from localStorage", err);
          setEvents([]);
        }
      }
    } catch {
      setEvents([]);
    }
  }, []);

  // Helper: persist immediately
  const persistAndSetEvents = (updater) => {
    setEvents((prev) => {
      const newEvents = typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem("events", JSON.stringify(newEvents));
      return newEvents;
    });
  };

  //User auth code
  const login = (userRole, userObj = null) => {
    setRole(userRole);
    localStorage.setItem("role", userRole);

    if (userObj) {
      setCurrentUser(userObj);
      localStorage.setItem("currentUser", JSON.stringify(userObj));
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        const email = token.replace("-token", "");
        const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
        const found = accounts.find((a) => a.email === email);
        if (found) {
          setCurrentUser(found);
          localStorage.setItem("currentUser", JSON.stringify(found));
        }
      }
    }
  };

  const logout = () => {
    setRole(null);
    setCurrentUser(null);
    toast.success("Successfully logged out!");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  };

  // helper function to convert file to Base64 string
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // base64 string
    reader.onerror = (error) => reject(error);
  });
};


// calculating status on basis of joining
const computeStatus = (startDate, timeStr = "", endDate = "") => {
  if (!startDate) return "upcoming";

  const now = new Date();

  const start = new Date(`${startDate}T${timeStr || "00:00"}`);
  const end = endDate ? new Date(`${endDate}T23:59`) : start;

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "current";
  return "past";
};



// ---------------- EVENTS ----------------
  
const createEvent = async (newEvent) => {
  if (!currentUser) {
    toast.error("Login to post an event");
    return;
  }

  if (role !== "alumni") {
    toast.warn("Only Higher authorities are allowed for this action");
    return;
  }

  // Convert image to base64 if it's a File object
  let imageData = newEvent.img;
  if (newEvent.img instanceof File) {
    imageData = await fileToBase64(newEvent.img);
  }

  if (!imageData || imageData.trim() === "") {
  imageData = "/images/event.png";
  }

 const status = computeStatus(newEvent.date, newEvent.time, newEvent.endDate);

  const eventToAdd = {
    ...newEvent,
    id: Date.now(),
    img: imageData, 
    status,
    host: {
      ...currentUser,
    },
    participants: [],
    requests: [],
  };

  setEvents((prev) => {
    const updated = [...prev, eventToAdd];
    localStorage.setItem("events", JSON.stringify(updated));
    return updated;
  });

  toast.success("Event successfully created & sent for admin approval!");
};

const updateEvent = async (eventId, updateData) => {
  if (role !== "alumni") {
    toast.warn("Only higher authorities can update events");
    return;
  }

  let imageData = updateData.img;
  if (updateData.img instanceof File) {
    imageData = await fileToBase64(updateData.img);
  }

 const status = computeStatus(updateData.date, updateData.time, updateData.endDate);


  persistAndSetEvents((prev) =>
    prev.map((ev) =>
      ev.id === eventId && ev.host?.email === currentUser?.email
        ? { ...ev, ...updateData, img: imageData, status }
        : ev
    )
  );

  toast.success("Event updated successfully!");
};

  const deleteEvent = (eventId) => {
    if (role !== "alumni") {
      toast.warn("Only higher authorities can delete events");
      return;
    }
    persistAndSetEvents((prev) =>
      prev.filter((ev) => ev.id !== eventId)
    );
  };

  const changeStatus = (eventId, status) => {
    if (role !== "alumni") {
      toast.error("Not authorized");
      return;
    }
    persistAndSetEvents((prev) =>
      prev.map((ev) => (ev.id === eventId ? { ...ev, status } : ev))
    );
  };

  const joinEvent = (eventId) => {
    if (!currentUser) {
      toast.warn("Please login to join the events!");
      return;
    }
    persistAndSetEvents((prev) =>
      prev.map((ev) =>
        ev.id === eventId
          ? {
              ...ev,
              participants: ev.participants.some(
                (p) => p.email === currentUser.email
              )
                ? ev.participants
                : [...ev.participants, { ...currentUser }],
            }
          : ev
      )
    );
  };

  const leaveEvent = (eventId) => {
    if (!currentUser) return;
    persistAndSetEvents((prev) =>
      prev.map((ev) =>
        ev.id === eventId
          ? {
              ...ev,
              participants: ev.participants.filter(
                (p) => p.email !== currentUser.email
              ),
            }
          : ev
      )
    );
  };

  const getMyEvents = () => {
    if (!currentUser) return [];
    if (role === "alumni") {
      return events.filter((ev) => ev.host?.email === currentUser.email);
    }
    if (role === "student") {
      return events.filter((ev) =>
        ev.participants.some((p) => p.email === currentUser.email)
      );
    }
    return [];
  };

  const getRecentPosted = (limit = 3) => {
    return [...events].sort((a, b) => b.id - a.id).slice(0, limit);
  };

  const requestToJoin = (eventId) => {
    if (!currentUser) {
      toast.warn("Please login first.");
      return;
    }
    persistAndSetEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              requests: event.requests.some((r) => r.email === currentUser.email)
                ? event.requests
                : [...event.requests, { ...currentUser }],
            }
          : event
      )
    );
    toast.success("Request sent!");
  };

  const approveRequest = (eventId, userEmail) => {
    persistAndSetEvents((prev) =>
      prev.map((event) => {
        if (event.id === eventId && event.host?.email === currentUser?.email) {
          const userToApprove = event.requests.find((u) => u.email === userEmail);
          if (!userToApprove) return event;
          return {
            ...event,
            participants: [...event.participants, userToApprove],
            requests: event.requests.filter((u) => u.email !== userEmail),
          };
        }
        return event;
      })
    );
    toast.success("Student approved!");
  };

  const cancelRequest = (eventId) => {
    persistAndSetEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              requests: event.requests.filter(
                (req) => req.email !== currentUser.email
              ),
            }
          : event
      )
    );
    toast.success("Request canceled!");
  };

  const rejectRequest = (eventId, userEmail) => {
    persistAndSetEvents((prev) =>
      prev.map((event) =>
        event.id === eventId && event.host?.email === currentUser?.email
          ? {
              ...event,
              requests: event.requests.filter((u) => u.email !== userEmail),
            }
          : event
      )
    );
    toast.warn("Request rejected!");
  };

  return (
    <AuthContext.Provider
      value={{
        role,
        login,
        logout,
        currentUser,
        events,
        createEvent,
        updateEvent,
        deleteEvent,
        changeStatus,
        joinEvent,
        leaveEvent,
        getMyEvents,
        getRecentPosted,
        requestToJoin,
        approveRequest,
        rejectRequest,
        cancelRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


