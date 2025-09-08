import React, { useEffect, useRef, useState } from "react";
import { statsData } from "../../../utils/data";

const StatsCard = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  {/**MY GO TO METHOD FOR RANDOM NUMBERS ANIMATION */}

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          statsData.forEach((stat, i) => {
            let current = 0;
            const increment = Math.ceil(stat.value / (30 + Math.random() * 30));

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[i] = current;
                return newCounts;
              });
            }, 50);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-36 bg-white">
      <h2 className="text-3xl tracking-tight md:text-5xl font-bold text-center mb-12">
        Platform Impact in <br /><span className="text-[var(--Accent)]">Numbers</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-200 w-[250px] md:w-[280px] p-6 flex 
            flex-col items-center text-center gap-2"
          >
            <div className="w-12 aspect-square p-2 flex items-center justify-center
            rounded-full bg-gray-100"><stat.icon className="text-2xl"/>
            </div>
            <p className={`text-3xl md:text-4xl font-bold mt-2`} style={{color:stat.color}}>
              {counts[index]}
              {stat.suffix}
            </p>
            <h3 className="text-lg font-semibold mt-2">{stat.label}</h3>
            <p className="text-sm text-gray-500">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
