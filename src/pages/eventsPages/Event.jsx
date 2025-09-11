import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { format } from "date-fns";
import { toast } from "react-toastify";

const Event = () => {
  const { eventId } = useParams();
  const { events, currentUser, requestToJoin,cancelRequest, leaveEvent } = useAuth();
  const navigate = useNavigate();

  if (!events || events.length === 0) {
    return <p className="text-center py-20">Loading event...</p>;
  }

  const event = events.find((e) => e.id === Number(eventId));

  if (!event) {
    return <p className="text-center py-20">Event not found</p>;
  }

  const hostImage =
    event.host?.img && event.host.img.trim() !== ""
      ? event.host.img
      : "/images/user.png";

 
  console.log("🎯 Current Event:", event);

  // State checks
  const isParticipant = event.participants?.some(
    (p) => p.email === currentUser?.email
  );
  const hasRequested = event.requests?.some(
    (r) => r.email === currentUser?.email
  );
  const hasJoined = event.participants.some((p) => p.email === currentUser?.email);

  //tags accent colors
  const getEventTagColor = (status) => {
  switch (status) {
    case "upcoming":
      return "bg-yellow-400 text-black";
    case "current":
      return "bg-green-500 text-white";
    case "past":
      return "bg-red-400 text-white";
    default:
      return "bg-gray-300 text-black";
  }
  };


  const handleEnroll = () => {
    if(!currentUser){
        toast.error('Not Logged In Please login');
        return;
    }
    if(currentUser?.email === event.host?.email){
        toast.info("You can't join your hosted event");
        return;
    }
    console.log("✅ Sending join request for event:", event.id);
    requestToJoin(event.id);
  };

  const handleCancelRequest = () => {
    if(!currentUser){
        toast.error('Not Logged In Please login');
        return;
    }
    console.log("❌ Canceling request for event:", event.id);
    cancelRequest(event.id);
  };

  return (
    <div className="flex justify-center items-start px-4 py-20 md:py-24 lg:py-32">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl md:max-w-4xl w-full grid md:grid-cols-2 gap-6 p-6 md:p-8 relative">
        {/* Left side - Event image */}
        <div className="flex justify-center items-center ">
          <img
            src={
              event?.img || "/images/event.png"
            }
            alt={event.heading}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Right side - Event details */}
        <div className="flex flex-col space-y-4 overflow-y-auto h-auto md:max-h-[calc(100vh-200px)] pr-2">
          {/* Tag */}
         <div className="flex gap-4">
             <span className="px-3 py-1 text-sm rounded-full bg-[var(--Accent)] text-white w-fit">
            {event.tag || "Event"}
          </span>

          <span className={`px-3 py-1 text-sm rounded-full ${getEventTagColor(event.status)} w-fit flex justify-center items-center `}>
            {event.status}
          </span>

          <span  onClick={()=>navigate('/events')} className="px-3 cursor-pointer border border-[var(--Border)] text-black py-1 
          text-sm rounded-full w-fit bg-gray-200 flex justify-center !font-[nunito-regular] font-bold ml-auto items-center">
            view all events
          </span>
         </div>

          {/* Heading */}
          <h1 className="text-xl md:text-2xl font-bold">{event.heading}</h1>

          {/* Description */}
          <p className="text-gray-600 overflow-hidden leading-tight">{event.description}</p>

          {/* Host */}
          <div className="flex items-center gap-3 mt-2">
            <img
              src={hostImage}
              alt={event.host?.name || "Host"}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">
                {event.host?.name || "Unknown Host"}
              </p>
              <p className="text-gray-500 text-sm">
                {event.host?.role || "Event Host"}
              </p>
            </div>
          </div>

          {/* Event info */}
          <div className="mt-4 space-y-1 text-sm">
            <p>
              📅{" "}
              {event.date
                ? format(new Date(event.date), "dd MMM yyyy")
                : "TBA"}
                &nbsp;
                to
                &nbsp;
                {
                   event.endDate
                ? format(new Date(event.endDate), "dd MMM yyyy")
                : "TBA" 
                }
            </p>
            <p>⏰ {event.time || "Time not set"}</p>
            <p>📍 {event.location || "Venue TBA"}</p>
            <p>👥 {event.participants?.length || 0} Participants enrolled</p>
            <p>👥 {event.requests?.length || 0} Requests</p>
          </div>

          {/* Request / Status Box */}
          {hasRequested && !isParticipant && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
              <p className="text-yellow-700 font-medium">
                Your participation request is pending
              </p>
              <p className="text-gray-600">
                Waiting for host approval. You can cancel anytime.
              </p>
            </div>
          )}

          {isParticipant && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
              <p className="text-green-700 font-medium">
                🎉 You are enrolled in this event!
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-4  bg-white">
            {event.status === 'past'?(
              <button className='bg-red-800 flex-1 opacity-70 px-4 py-2 rounded-lg text-white'>
                Ended
              </button>
            ):
           hasJoined ? (
              <button
                onClick={() => leaveEvent(event.id)}
                className="px-4 py-2 bg-gray-200 rounded-lg font-semibold"
              >
                Leave Event
              </button>
            ) : hasRequested ? (
              <button
                onClick={() => handleCancelRequest()}
                className="px-4 py-2 bg-red-200 rounded-lg font-semibold"
              >
                Cancel Request
              </button>
            ) : (
              <button
                onClick={() => handleEnroll()}
                className="px-4 py-2 bg-[var(--Accent)] text-white rounded-lg font-semibold"
              >
                Enroll Now
              </button>
            )}
            {currentUser?.email === event.host?.email && (event.status !== 'past') && (
              <button
                onClick={() => navigate(`/events/manage/${event.id}`)}
                className="px-4 py-2 bg-gray-200 text-black rounded-lg font-semibold"
              >
                Update Event
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;



