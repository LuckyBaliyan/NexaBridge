import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import EventsCard from "../../components/ui/Cards/EventsCard";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";

const EventsPage = () => {
  const { events, currentUser, approveRequest, rejectRequest} = useAuth();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const tabs = ["upcoming", "current", "past", "all", "my"];
  if (currentUser?.role === "alumni") {
    tabs.push("requests");
  }

  // Filter by tab
  const filteredEvents = events.filter((event) => {
    if (activeTab === "upcoming") return event.status === "upcoming";
    if (activeTab === "current") return event.status === "current";
    if (activeTab === "past") return event.status === "past";
    if (activeTab === "all") return true;

    if (activeTab === "my") {
      if (currentUser?.role === "alumni") {
        return (
          event.host?.email === currentUser?.email ||
          event.participants?.some((p) => p.email === currentUser?.email) ||
          event.requests?.some((r) => r.email === currentUser?.email)
        );
      } else {
        return (
          event.participants?.some((p) => p.email === currentUser?.email) ||
          event.requests?.some((r) => r.email === currentUser?.email)
        );
      }
    }

    return true;
  });

  // Search filter
  const searchedEvents = filteredEvents.filter((event) =>
    event.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // My Events sub-categorization
  const myHosted = searchedEvents.filter(
    (e) => e.host?.email === currentUser?.email
  );
  const myJoined = searchedEvents.filter((e) =>
    e.participants?.some((p) => p.email === currentUser?.email)
  );
  const myRequested = searchedEvents.filter((e) =>
    e.requests?.some((r) => r.email === currentUser?.email)
  );

  return (
    <div className="px-4 md:px-8 py-16 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      {/* Tabs + Search + Create */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        {/* Tabs */}
        <div className="flex gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full transition ${
                activeTab === tab
                  ? "text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
              style={{
                backgroundColor: activeTab === tab ? "var(--Accent)" : "white",
              }}
            >
              {tab === "upcoming"
                ? "Upcoming"
                : tab === "current"
                ? "Current"
                : tab === "past"
                ? "Past"
                : tab === "all"
                ? "All Events"
                : tab === "my"
                ? "My Events"
                : "Requests"}
            </button>
          ))}
        </div>

        {/* Search + Create */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg w-full bg-white md:w-64 border border-gray-200 outline-none"
          />
          {currentUser?.role === "alumni" && (
            <button
              onClick={() => navigate("/events/manage")}
              className="text-white px-4 py-2 rounded-full transition"
              style={{ backgroundColor: "var(--Accent)" }}
            >
              + Create Event
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "requests" ? (
        <div className="space-y-10">
          <h3 className="text-lg font-semibold mb-6">Join Requests</h3>
          {events.filter(ev => ev.host?.email === currentUser?.email && ev.requests?.length > 0).length === 0 ? (
            <p className="text-gray-500">No join requests at the moment.</p>
          ) : (
            events
              .filter(ev => ev.host?.email === currentUser?.email && ev.requests?.length > 0)
              .map((ev) => (
                <div key={ev.id} className="bg-white shadow-md rounded-xl p-6">
                 <div className="flex gap-6 justify-between">
                   <h4 className="text-xl font-semibold mb-4">{ev.heading.toUpperCase()}</h4> 
                   <h6  className={`!text-white font-extrabold font-[nunito-regular]  
                   flex items-center justify-center text-md mb-2 px-4 py-1 bg-[var(--Accent)] 
                   rounded-full cursor-pointer`}
                    onClick={()=>navigate(`/events/${ev.id}`)} >view</h6>
                 </div>
                  <div className="space-y-4">
                    {ev.requests.map((req) => (
                      <div
                        key={req.email}
                        className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-[var(--Border)]"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={req.img || "/images/user.png"}
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold">{req.name}</p>
                            <p className="text-sm text-gray-600 capitalize">
                              {req.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                         <div className="w-fit p-2 cursor-pointer rounded-lg active:scale-95  aspect-square flex items-center 
                         justify-center bg-green-200" onClick={() => approveRequest(ev.id, req.email)} >
                           <button
                            className="text-green-600 text-xl pointer-events-none hover:scale-110 transition"
                            title="Approve"
                          >
                            <FaCheck />
                          </button>
                         </div>
                            <div className="w-fit p-2 cursor-pointer rounded-lg active:scale-95  aspect-square flex items-center justify-center
                             bg-red-400" onClick={() => rejectRequest(ev.id, req.email)}>
                           <button
                            className="text-black text-xl pointer-events-none hover:scale-110 transition"
                            title="Approve"
                          >
                            <FaTimes />
                          </button>
                         </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      ) : activeTab === "my" ? (
        <div>
          <h3 className="text-lg font-semibold mb-6">My Events</h3>

          {/* Hosted */}
          {currentUser?.role === "alumni" && (
            <div className="mb-10">
              <h4 className="!text-xl font-[nunito-regular] font-semibold mb-3">
                My Hosted Events
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                {myHosted.length > 0 ? (
                  myHosted.map((event) => (
                    <EventsCard key={event.id} event={event} />
                  ))
                ) : (
                  <p className="text-gray-500">No hosted events.</p>
                )}
              </div>
            </div>
          )}

          {/* Joined */}
          <div className="mb-10">
            <h4 className="!text-xl font-[nunito-regular] font-semibold mb-3">
              Joined Events
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {myJoined.length > 0 ? (
                myJoined.map((event) => (
                  <EventsCard key={event.id} event={event} />
                ))
              ) : (
                <p className="text-gray-500">No joined events.</p>
              )}
            </div>
          </div>

          {/* Requested */}
          <div>
            <h4 className="!text-xl font-[nunito-regular] font-semibold mb-3">
              Requested Events
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {myRequested.length > 0 ? (
                myRequested.map((event) => (
                  <EventsCard key={event.id} event={event} />
                ))
              ) : (
                <p className="text-gray-500">No requested events.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10">
          <h3 className="text-lg capitalize font-[nunito-regular] font-semibold mb-4">
            {activeTab} Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {searchedEvents.length > 0 ? (
              searchedEvents.map((event) => (
                <EventsCard key={event.id} event={event} />
              ))
            ) : (
              <p className="text-gray-500">No events found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;








