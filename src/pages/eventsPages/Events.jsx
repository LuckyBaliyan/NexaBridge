import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import EventsCard from "../../components/ui/Cards/EventsCard";

const EventsPage = () => {
  const { events, currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter by tab
  const filteredEvents = events.filter((event) => {
    if (activeTab === "upcoming") return event.status === "upcoming";
    if (activeTab === "current") return event.status === "current";
    if (activeTab === "past") return event.status === "past";
    if (activeTab === "all") return true;

    if (activeTab === "my") {
      if (currentUser?.role === "alumni") {
        return (
          event.host?.id === currentUser?.id ||
          event.participants?.some((p) => p.id === currentUser?.id) ||
          event.requests?.some((r) => r.id === currentUser?.id)
        );
      } else {
        return (
          event.participants?.some((p) => p.id === currentUser?.id) ||
          event.requests?.some((r) => r.id === currentUser?.id)
        );
      }
    }

    return true;
  });

  // Search filter
  const searchedEvents = filteredEvents.filter((event) =>
    event.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Split sections for "My Events"
  const myHosted = searchedEvents.filter(
    (e) => e.host?.id === currentUser?.id
  );
  const myJoined = searchedEvents.filter((e) =>
    e.participants?.some((p) => p.id === currentUser?.id)
  );
  
  const myRequested = searchedEvents.filter((e) =>
    e.requests?.some((r) => r.id === currentUser?.id)
  );

  return (
    <div className="px-4 md:px-8 py-16 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      {/* Tabs + Search + Create */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Tabs */}
        <div className="flex gap-3 flex-wrap">
          {["upcoming", "current", "past", "all", "my"].map((tab) => (
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
                : "My Events"}
            </button>
          ))}
        </div>

        {/* Search + Create */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg w-full bg-white md:w-64 border border-gray-200 outline-none"
          />
          {currentUser?.role === "alumni" && (
            <button
              className="text-white px-4 py-2 rounded-full transition"
              style={{ backgroundColor: "var(--Accent)" }}
            >
              + Create Event
            </button>
          )}
        </div>
      </div>

      {/* Events Display */}
      {activeTab !== "my" ? (
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
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-6">My Events</h3>

          {/* Alumni extra section */}
          {currentUser?.role === "alumni" && (
            <div className="mb-10">
              <h4 className="!text-xl font-[nunito-regular] font-semibold mb-3">My Hosted Events</h4>
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
            <h4 className="!text-xl font-[nunito-regular] font-semibold mb-3">Joined Events</h4>
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

          <div>
            <h4 className="!text-xl font-[nunito-regular] font-semibold mb-3">Requested Events</h4>
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
      )}
    </div>
  );
};

export default EventsPage;







