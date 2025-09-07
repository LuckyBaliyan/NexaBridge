import React, { useRef, useState } from "react";
import gsap from "gsap";

const cardsData = [
  {
    img: "/images/card1.webp",
    name: "Amit Sharma",
    heading: "Software Engineer @ Google",
    comment:
      "NexaBridge helped me reconnect with my alumni network and find amazing mentorship opportunities.",
  },
  {
    img: "/images/card2.webp",
    name: "Priya Verma",
    heading: "Data Analyst @ Microsoft",
    comment:
      "The career services and events have been super useful in growing my professional connections.",
  },
  {
    img: "/images/card3.webp",
    name: "Rohit Kumar",
    heading: "Founder @ StartUpX",
    comment:
      "I was able to connect with experienced alumni who guided me through my entrepreneurial journey.",
  },
  {
    img: "/images/card4.webp",
    name: "Anjali Mehta",
    heading: "Product Designer @ Adobe",
    comment:
      "Loved the mentorship programs — they truly bridge the gap between students and professionals.",
  },
];

const SwipeCards = () => {
  const [cards, setCards] = useState(cardsData);
  const cardRefs = useRef([]);
  const isAnimating = useRef(false); 

  const handleNext = () => {
    if (isAnimating.current) return; 
    isAnimating.current = true;

    const firstCard = cardRefs.current[0];
    gsap.to(firstCard, {
      x: 500,
      scale: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setCards((prev) => {
          const updated = [...prev];
          const shifted = updated.shift();
          updated.push(shifted);
          return updated;
        });
        gsap.set(firstCard, { x: 0, scale: 1, opacity: 1 });
        isAnimating.current = false; 
      },
    });
  };

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const lastCardIndex = cards.length - 1;
    const lastCard = cardRefs.current[lastCardIndex];

    setCards((prev) => {
      const updated = [...prev];
      const popped = updated.pop();
      updated.unshift(popped);
      return updated;
    });

    gsap.fromTo(
      lastCard,
      { x: -50},
      {
        x: 0,
        onComplete: () => {
          isAnimating.current = false; 
        },
      }
    );
  };

  return (
    <div className="relative w-full h-[600px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
     <div className="aspect-square w-[650px] lg:w-[120vw] lg:h-[950px]  rounded-t-full rounded-b-2xl bg-[#7b8995] top-1/2 left-1/2"></div>
      {/* Card stack */}
      {cards.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="absolute w-[90%] max-w-[400px] min-h-[500px] mt-6 rounded-3xl shadow-lg overflow-hidden 
          bg-white px-4 py-6 sm:px-6 md:px-8 flex flex-col items-center text-center border border-[var(--Border)]"
          style={{
            zIndex: cards.length - index,
            transform: `scale(${1 - index * 0.05}) translateY(-${index * 20}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          <img
            src={card.img}
            alt={card.name}
            className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm"
          />

          <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{card.heading}</p>

          <p className="text-gray-800 italic text-base leading-snug relative px-4">
            <span className="text-2xl font-bold text-gray-400">“</span>
            {card.comment}
            <span className="text-2xl font-bold text-gray-400">”</span>
          </p>
        </div>
      ))}

      <div className="absolute top-2/3 md:top-1/2 flex justify-between w-full max-w-[550px] px-4 z-30">
        <button
          onClick={handlePrev}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-900 text-white text-sm sm:text-base rounded-full shadow hover:bg-gray-700"
        >
          ← Prev
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-900 text-white text-sm sm:text-base rounded-full shadow hover:bg-gray-700"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default SwipeCards;







