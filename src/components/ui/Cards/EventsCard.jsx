import React, { useState } from "react";
import { format } from "date-fns";
import { FiShare2, FiTrash2 } from "react-icons/fi"; // Feather icons from react-icons
import { CiBellOn } from "react-icons/ci";
import { HiMiniBellAlert } from "react-icons/hi2";
import { toast } from "react-toastify";

const EventsCard = ({ event, currentUser, onDelete }) => {
  const isHost = event.host?.id === currentUser?.id;
  const [reminder,setReminder] = useState(false);

  const handleReminder = ()=> {
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

  return (
    <div
      key={event.id}
      className="bg-white rounded-xl p-4 shadow-md overflow-hidden mx-auto 
                 w-full md:max-w-md lg:max-w-sm"
    >
      <img
        src={event?.img && event.img.trim() !== "" ? event.img : "/images/event.png"}
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
        <div className="flex gap-2 mt-3">
          <button
            className="flex-1 text-white px-4 py-2 rounded-lg transition bg-[var(--Accent)] 
                       hover:bg-[var(--AccentHover)]"
          >
            View Details
          </button>

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
              onClick={() => onDelete(event.id)}
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

export default EventsCard;

