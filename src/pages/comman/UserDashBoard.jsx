import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import Greeting from "./Greeting";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProfileCard from "../../components/ui/sections/UserProfile";
import PostApportunity from "../../components/ui/sections/PostApportunity";

const Dashboard = () => {
  const { currentUser, role, events } = useAuth();
  const [activeTab, setActiveTab] = useState("home"); // greeting default
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const reminderDate = new Date(2025, 8, 12); // September 12, 2025
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-600">
        Please login to view your dashboard.
      </div>
    );
  }

  const commonTabs = [
    { id: "home", label: "Home" },
    { id: "dashboard", label: "Dashboard" },
    { id: "connections", label: "My Connections" },
    { id: "profile", label: "My Profile" },
    { id: "opportunities", label: "Opportunities" },
    { id: "Chats", label: "Chats" },
  ];

  const opportunities = [
    {
      id: 1,
      position: "Finance Intern",
      company: "Global Investments",
      location: "New York, NY",
      type:"Intern",
      image: null,
    },
    {
      id: 2,
      position: "Marketing Intern",
      company: "Trendsetters Inc.",
      location: "Remote",
      type:"Intern",
      image: null,
    },
    {
      id: 3,
      position: "Jr. Software Engineer",
      company: "Tech Innovators",
      location: "San Francisco, CA",
      type:"Employee",
      image: null,
    },
  ];

  const requestedEvents = events
    .filter((ev) => ev.requests?.some((r) => r.email === currentUser.email))
    .slice(0, 3);

  const enrolledEvents = events
    .filter((ev) => ev.participants?.some((p) => p.email === currentUser.email))
    .slice(0, 3);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-14 left-0 right-0 bg-white border-b border-[var(--Border)] flex items-center justify-between px-4 py-2 shadow z-40">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-16 left-0 min-h-screen w-64 bg-white p-4 border-r border-[var(--Border)] 
         md:py-24 lg:py-32 shadow-md z-30 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6 pt-6 md:pt-0">Menu</h2>
        <ul className="space-y-3">
          {commonTabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? "bg-[var(--Accent)] text-white shadow-md"
                    : ""
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto mt-28 md:mt-0 md:py-24 lg:py-32">
        {/* Greeting */}
        {activeTab === "home" && <Greeting />}

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

            {/* Connections and Appointments in grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* My Connections */}
              <div className="p-4 bg-white shadow rounded-lg">
                <h3 className="font-medium mb-3">Recent Connections</h3>
                <div className="flex space-x-4">
                  {[null,"Ethan Carter", "Olivia Harper", "Liam Walker"].map((name, index) => (
                    name &&
                    <div key={index} className="text-center flex flex-col items-center gap-2">
                      <img
                        src={`/images/s${index}.webp`}
                        alt="conn"
                        className="w-12 h-12 rounded-full mx-auto"
                      />
                      <p className="text-sm">{name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="p-4 bg-white shadow rounded-lg">
                <h3 className="font-medium mb-3">Upcoming Reminders</h3>
                <div
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="flex items-center justify-between p-4 border border-[var(--Border)] rounded-lg cursor-pointer bg-gray-100"
                >
                  <div>
                    <p className="font-semibold">Career Counseling Session</p>
                    <p className="text-sm text-gray-600">10:00 AM - 11:00 AM, Today</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="inline-block bg-[var(--Accent)] text-white px-2 py-1 rounded">
                      Sep 12, 2025
                    </span>
                  </div>
                </div>
                {showCalendar && (
                  <div className="mt-4">
                    <Calendar
                      value={reminderDate}
                      className={'bg-[var(--Accent)] border-0 outline-0'}
                      tileClassName={({ date, view }) =>
                        date.toDateString() === reminderDate.toDateString()
                          ? "bg-[var(--Accent)] text-white rounded-full"
                          : null
                      }
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Events Section */}
         <div className="p-4 bg-white shadow rounded-lg mb-6">
         <h3 className="font-medium mb-3 text-lg">
           {requestedEvents.length > 0 ? "My Requested Events" : enrolledEvents.length > 0 ? "Enrolled Events" : "No Events"}
         </h3>
       
         {(requestedEvents.length > 0 || enrolledEvents.length > 0) ? (
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
             {(requestedEvents.length > 0 ? requestedEvents : enrolledEvents).map((ev) => {
               let statusColor = "text-gray-600";
               if (ev.status === "current") statusColor = "text-green-600";
               else if (ev.status === "upcoming") statusColor = "text-yellow-500";
               else if (ev.status === "past") statusColor = "text-red-600";
       
               return (
                 <div
                   key={ev.id}
                   className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg
                   cursor-pointer shadow-sm"
                   onClick={()=>navigate(`/events/${ev.id}`)}
                 >
                   <img
                     src={ev.img || "/images/event.png"}
                     alt="event"
                     className="w-12 h-12 rounded-full object-cover mr-4"
                   />
                   <div className="flex flex-col">
                     <span className="font-semibold text-md">{ev.heading}</span>
                     <span className={`text-sm mt-1 font-medium ${statusColor}`}>
                       {ev.status}
                     </span>
                   </div>
                 </div>
               );
             })}
           </div>
         ) : (
           <div className="flex justify-center">
             <button
               onClick={() => navigate("/events")}
               className="flex items-center gap-2 bg-[var(--Accent)] text-white px-4 py-2 rounded-full shadow 
               cursor-pointer transition"
             >
               <span className="text-xl text-white font-bold">+</span>
               <span className="text-sm text-white font-medium">
                 {role === "student" ? "Join Events" : "Add Event"}
               </span>
             </button>
           </div>
         )}
        </div>

            {/* Opportunities */}
            <div className="p-4 bg-white shadow rounded-lg mb-6 overflow-hidden overflow-x-visible">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Opportunities</h3>
                {role === "alumni" && (
                  <button
                    onClick={() => navigate("/opportunities")}
                    className="bg-[var(--Accent)] text-white px-4 py-2 rounded-lg shadow"
                  >
                    + Add Opportunity
                  </button>
                )}
              </div>
              <table className="w-full text-sm text-left text-black font-[nunito-regular]">
                <thead>
                  <tr>
                    <th className="pb-2">Position</th>
                    <th className="pb-2">Company</th>
                    <th className="pb-2 hidden lg:block">Location</th>
                    <th className="pb-2 hidden lg:block">Images</th>
                    <th className="pb-2">Type</th>
                    <th className="pb-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map((job) => (
                    <tr key={job.id} className="border-t text-sm border-[var(--Border)] mt-4 ">
                      <td className="py-2">{job.position}</td>
                      <td>{job.company}</td>
                      <td className="hidden lg:block">{job.location}</td>
                      <td className="hidden lg:block"><img src={job.image || '/images/event.png'} alt="" className="w-8" /></td>
                      <td>{job.type}</td>
                      <td>
                          <button className="bg-gray-200 text-black font-bold px-4 py-1 cursor-pointer rounded">
                            View
                          </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Connections */}
        {activeTab === "connections" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Connections</h2>
            <p className="text-gray-600">List of your alumni connections will appear here.</p>
          </div>
        )}

        {/* Profile */}
        {activeTab === "profile" && (
          <div>
            <ProfileCard />
          </div>
        )}

        {/* Opportunities */}
        {activeTab === "opportunities" && (
          <div>
            <PostApportunity />
          </div>
        )}

        {/* Edit Profile */}
        {activeTab === "editProfile" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <p className="text-gray-600">Form to edit profile details will go here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;






