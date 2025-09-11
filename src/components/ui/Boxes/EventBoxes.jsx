import React from "react";
import { eventsData } from "../../../utils/data";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const EventCard = ({id, heading, description, img, buttonText='View', date }) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-[#E5E7EB] rounded-xl shadow-md  p-6 mb-8">
      <div className="flex-1 w-full md:w-auto">
        <div className="flex items-center md:justify-start md:gap-2 lg:gap-0 lg:justify-between"><h3 className="text-2xl font-bold mb-3">{heading}</h3>
        <p className="text-black hidden whitespace-nowrap text-xs md:block lg:text-base font-bold mb-2">({date})</p>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <button className="px-4  py-2 bg-[var(--Accent)] text-white text-sm rounded-lg shadow hover:opacity-90 
        active:scale-95 transition-transform" onClick={()=>navigate(`/events/${id}`)}>
          {buttonText}
        </button>
        <p className="text-black md:hidden whitespace-nowrap md:text-base font-bold mb-2">({date})</p>
      </div>
      </div>

      <div className="w-full md:max-w-32">
        <img
          src={img}
          alt={heading}
          className="w-full h-28 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};


const EventBox = () => {
  const {events} = useAuth();
  return (
    <div className="w-full py-12 px-4 md:px-8">
      <p className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
        Events & News
      </p>

      {events.slice(-3).map((event, index) => (
        <EventCard
          key={index}
          id={event.id}
          heading={event.heading}
          description={event.description}
          img={event.img}
          buttonText={event.buttonText}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default EventBox;
