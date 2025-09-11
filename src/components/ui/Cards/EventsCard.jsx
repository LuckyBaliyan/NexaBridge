import React, { useState,memo } from "react";
import { format } from "date-fns";
import { FiShare2, FiTrash2 } from "react-icons/fi"; // Feather icons from react-icons
import { CiBellOn } from "react-icons/ci";
import { HiMiniBellAlert } from "react-icons/hi2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

const EventsCard = ({event}) => {
  const [reminder,setReminder] = useState(false);
  const {deleteEvent,role,currentUser} = useAuth();

  const isHost = event.host?.email === currentUser?.email && role === 'alumni';

  const handleReminder = ()=> {
    if(!currentUser){
        toast.warn('you need to login first to set a reminder');
        return;
    }
    setReminder((prev)=>!prev);
    if(!reminder)
    toast.success("Remider Set Sucessfully u will be notified when the event strats!");
    else
    toast.warn("Reminder Unset from this event");
  }

  const handleShare = () => {
    const shareData = {
      title: event.heading,
      text: event.description,
      url: window.location.href + `?event=${event.id}`, 
    };
    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log("Share failed", err));
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Event link copied to clipboard!");
    }
  };

  const handleDelete = ()=>{
    if(!currentUser){
        toast.warn('login require to delete an event');
        return;
    }
      if (!isHost) {
      toast.warn("You are not authorized to delete this event.");
      return;
    }

    deleteEvent(event.id);
    toast.success("Sucessfully deleted this event");
  }

  return (
    <div
      key={event.id}
      className="bg-white rounded-xl p-4 shadow-md overflow-hidden mx-auto 
                 w-full md:max-w-md lg:max-w-sm"
    >
      <img
        src={event?.img || "/images/event.png"}
        alt={event.heading}
        className="w-full h-40 object-cover rounded-xl"
      />
      <div className="px-0 py-2 flex flex-col space-y-2">
        <h3 className="font-semibold text-lg">{event.heading}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {event.description.slice(0, 80)}...
        </p>
        <div className="mt-2  flex justify-between">
         <div>
            <p className="text-sm text-black">
            📅 {format(new Date(event.date), "dd MMM yyyy")}
          </p>
          <p className="text-sm text-black">
            Hosted by: {event.host?.name || "TBA"}
          </p>
         </div>
         <div className="text-2xl flex items-center justify-center w-10 h-10 cursor-pointer 
         bg-[#E5E7EB] rounded-full" onClick={handleReminder}>
           {!reminder?<CiBellOn />:<HiMiniBellAlert />}
         </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full gap-2 mt-3">
          <Link to={`/events/${event.id}`} className="flex-1">
            <button
            className="w-full text-white px-4 py-2 rounded-lg transition bg-[var(--Accent)] 
                       hover:bg-[var(--AccentHover)]"
          >
            View Details
          </button>
          </Link>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            title="Share Event"
          >
            <FiShare2 size={18} />
          </button>

          {/* Delete Button (Only for Alumni Host) */}
          {isHost && (
            <button
              onClick={handleDelete}
              className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition"
              title="Delete Event"
            >
              <FiTrash2 size={18} className="text-red-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(EventsCard);

