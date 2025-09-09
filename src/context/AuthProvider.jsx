import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [currentUser,setCurrentUser] = useState(null);
  const [events,setEvents] = useState([]);

  const defaultEvents = [
  {
    id:1,
    date: "12-Sep-2025",
    heading: "Alumni Meet 2025",
    description:
      "Join us for our annual alumni meet where past and present students come together to network and share their journeys.",
    img: "/images/e1.jpg",
    host:null,
    buttonText: "View More",
    participants:[],
  },
  { id:2,
    date: "05-Oct-2025",
    heading: "Tech Talk: AI in 2025",
    description:
      "A deep dive into the latest AI advancements hosted by industry experts. Open to students and alumni alike.",
    img: "/images/e2.jpg",
    host:null,
    buttonText: "Read More",
    participants:[],
  },
  {
    id:3,
    date: "22-Nov-2025",
    heading: "Campus Placement News",
    description:
      "This year’s placement drive was a huge success with record-breaking offers from top companies.",
    img: "/images/e3.jpg",
    host:null,
    buttonText: "Explore",
    participants:[],
  },
];

  // Refresh / first visit pe localStorage check kare
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem('currentUser');
    const savedEvents  = localStorage.getItem('events');

    if (savedRole && savedToken && savedUser) {
      setRole(savedRole); // refresh hone ke baad bhi role set ho jayega
      try{
        setCurrentUser(JSON.parse(savedUser))
      }
      catch{
        setCurrentUser(null)
      }
      finally{
        console.log("User set",savedUser);
      }
    }

    if(savedEvents.length>=1){
       setEvents(JSON.parse(savedEvents));
    }else{
        setEvents(defaultEvents);
        localStorage.setItem("events",JSON.stringify(defaultEvents));
    }
    console.log(defaultEvents);
  }, []);

  //Save evey time a new event get created
  useEffect(()=>{
      localStorage.setItem("event",JSON.stringify(events))
  },[events])

  const login = (userRole,userObj = null) => {
    setRole(userRole);
    localStorage.setItem("role", userRole);
    // token localStorage me pehle hi set ho raha hai tumhare Login.jsx me

    if(userObj){
        setCurrentUser(userObj);
        console.log('userSet',userObj);
        localStorage.setItem('currentUser',JSON.stringify(userObj));
    }else{
         const token = localStorage.getItem("token");
      if (token) {
        const email = token.replace("-token", "");
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
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
    toast.success('sucessfully Logged out!');
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem('currentUser');
  };
  

  //Basic crud operations 

  //Create a new event only alumni can do this stuff
  const createEvent = (newEvent)=>{
        if(!currentUser){
            toast.error("Login to post an event");
            return;
        }
        
        if(role !== 'Alumni'){
            toast.warn("Only Higer authorities are allowed for this action");
            return;
        }

        const eventToAdd = {
            ...newEvent,
            id:Date.now(),
            status:'Upcoming',
            host:{
                ...currentUser
            },
            participants:[],
        };

        setEvents((prev)=>[...prev,eventToAdd]);
        toast.success("Event sucessfully created & sent for admin approval!");
  };

  // Update event stuff
  const updateEvent = (eventId,updateData) =>{
    setEvents((prev)=>
    prev.map((ev)=>
    ev.id === eventId && ev.host?.email === currentUser?.email?
    {...ev,updateData}:ev)
    )
  }

  //Delete an event 
  const deleteEvent = (eventId) =>{
    setEvents((prev)=>
    prev.filter((ev)=>
    ev.id !== eventId && 
    (role === 'alumni' || ev.host?.email === currentUser?.email)
   ))
  }

  {
    /*
    change Status (final status can be changed by the alumni but 
    the confirmation is done by the amin form panel)
    **/
  }

  const changeStatus = (eventId,status) =>{
    if(role !== 'alumni'){
        toast.error("Not aurthorized for the this action");
        return;
    }
    setEvents((prev)=>
    prev.map((ev)=>
    ev.id === eventId ? {...ev,status:status}:ev
   ))
  }

  //Join event

  const joinEvent = (eventId)=>{
    if(!currentUser){
        toast.warn('Please Login to join the events!');
        return;
    }
    setEvents((prev)=>
    prev.map((ev)=>
    ev.id === eventId
   ?{
    ...ev,
    participants:ev.participants.some(
        (p)=>p.email === currentUser.email
    )?ev.participants:[...ev.participants,{...currentUser}]
   }:ev))
  }

  //Leave Event

  const leaveEvent = (eventId) =>{
    if(!currentUser) return;
    setEvents((prev)=>
    prev.map((ev)=>
    ev.id === eventId
    ?{
    ...ev,
    participants:ev.participants.filter(
        (p)=>p.email !== currentUser.email
     ),
    }:ev
    )
   )
  }

  //Get evets in which i enrolled 

  const getMyEvents = () =>{
    if(!currentUser) return [];

    if(role === 'alumni') {
        return events.filter((ev) => ev.host?.email === currentUser.email);
    }else if (role === 'student') {
        return events.filter((ev)=>
        ev.participants.some((p)=> p.email === currentUser.email)
    );
    }
    return [];
  }

  // remeber here i use id for the sorting which i have put the  date 
  // so its using date.now() for sorting 

  const getRecentPosted  = (limit = 3) =>{
    return [...events]
    .sort((a,b)=>b.id - a.id) // our OG classic sort function 
    .slice(0,limit);
  }

  return (
    <AuthContext.Provider value={{ 
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
        getRecentPosted
     }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
