import React, { useState } from "react";
import Mainbtn from "../../components/ui/Buttons/Mainbtn";
import {  toast } from "react-toastify";
import { causes } from "../../utils/data";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";


const CauseCard = ({ title, description, raised, goal, color }) => {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <div className="cause rounded-xl p-5 shadow-sm">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="mb-2 p-1 text-sm text-black font-[nunito-regular]">
        ₹{raised.toLocaleString()} raised of ₹{goal.toLocaleString()}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 ml-1 mb-3">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <Mainbtn
        text="Donate Now"
        className="bg-[var(--Accent)] text-white !rounded-md"
      />
    </div>
  );
};

export default function DonationCard() {
  const {role} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");

  // Handle Donation
  const handleDonate = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;

    if (!name.trim()) {
      toast.error("Please enter your name 🙏");
      return;
    }

    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount 🙏");
      return;
    }

    if (!role) {
      toast.warn("Please Login First");
       navigate("/login", { state: { from: location } }); // for keep track of our previous location
    } else {
       toast.success(`${name}, thank you for donating ₹${amount.toLocaleString()} 🎉`);
    }

    setSelectedAmount(5000);
    setCustomAmount("");
    setName("");
  };

  return (
    <div className="bg-white w-full min-h-screen">

      <div className="w-full relative h-40 md:h-56 lg:h-72">
        <img src="/images/d.jpg" alt="" className="w-full h-full object-cover" />
        <h2 className="text-3xl text-white absolute bottom-5 left-5 md:text-4xl lg:text-5xl font-bold">
          SUPPORT OUR VISION
        </h2>
      </div>


      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        <p className="text-black font-black text-center mb-8">
          Your contribution directly fuels the advancement of our collaborative
          projects, fostering innovation and creating opportunities for students
          and alumni alike. Every donation, regardless of size, plays a vital
          role in shaping the future of our community and its impact on the
          world.
        </p>

        <h2 className="text-xl font-semibold mb-4">Choose a Cause</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {causes.map((cause, i) => (
            <CauseCard key={i} {...cause} />
          ))}
        </div>

        <div className="border-t border-[var(--Border)] mt-10 pt-8">
          <h2 className="text-xl font-semibold text-center mb-3">
            General Donation
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Your general donation supports all our initiatives and goes where
            it’s needed most.
          </p>

 
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[1000, 2500, 5000, 10000].map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`px-5 py-2 rounded-lg border font-medium ${
                  selectedAmount === amount
                    ? "bg-[var(--Accent)] text-white border-[var(--Accent)]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                ₹{amount}
              </button>
            ))}
          </div>

         <div className="flex gap-2 flex-col items-center justify-center md:flex-row">
            <div className="flex justify-center md:mb-6">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[var(--Border)] rounded-lg px-4 py-2 w-64 text-gray-700 outline-0"
            />
          </div>

          <div className="flex justify-center mb-6">
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                const val = e.target.value;
                if (val < 0) return;
                setCustomAmount(val);
                setSelectedAmount(null);
              }}
              className="border border-[var(--Border)] rounded-lg px-4 py-2 w-64 text-gray-700 outline-0"
            />
          </div>
         </div>

          <div className="flex justify-center">
            <Mainbtn
              text="🤍 Donate"
              className="bg-[var(--Accent)] text-white !rounded-md"
              onClick={handleDonate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}







