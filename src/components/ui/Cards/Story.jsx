import React from "react";
import { storiesData } from "../../../utils/data";

const SuccessStories = () => {
  const loopStories = [...storiesData, ...storiesData];

  return (
    <div className="w-full py-12 overflow-hidden relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight capitalize font-[nunito-regular] mb-10">
        Alumni Success Stories
      </h2>

      <div className="relative w-full overflow-hidden">

        <div className="absolute hidden lg:block left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute hidden lg:block right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll gap-6 px-4 py-2">
          {loopStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 w-[280px] md:w-[320px] flex flex-col"
            >
              <img
                src={story.img}
                alt={story.heading}
                loading="lazy"
                className="w-full h-40 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg text-center font-semibold mb-2">{story.heading}</h3>
                <p className="text-sm text-gray-600 flex-grow">{story.story}</p>
                <button className="mt-4 self-start px-4 py-2 bg-[var(--Accent)] text-white text-sm rounded-lg shadow hover:opacity-90 active:scale-95 transition-transform">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          width: calc(280px * ${storiesData.length * 2} + 24px * ${
        storiesData.length * 2
      });
          animation: scroll 60s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 30s; /* Faster on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;


