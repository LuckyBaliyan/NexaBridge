import React, { useState } from "react";
import { toast } from "react-toastify";

export default function InitiateConnect() {
  const [requestType, setRequestType] = useState("Mentorship Opportunity");
  const [message, setMessage] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Request sent!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 md:pt-22 py-10 bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Initiate a Connection
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Craft a professional request to connect with our esteemed alumni
          network.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Request Type Dropdown */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Request Type
            </label>
            <select
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="w-full p-3 border border-[var(--Border)] rounded-md focus:outline-none outline-0"
            >
              <option>Mentorship Opportunity</option>
              <option>Career Advice</option>
              <option>Informational Interview</option>
              <option>General Networking</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-[var(--Border)] rounded-md resize-none focus:outline-none outline-0"
              placeholder="Write your personalized message here..."
              required
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Tip: Be specific about why you’re reaching out and what you’d like to discuss.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[var(--Accent)] text-white font-medium py-2 px-6 rounded-md transition duration-200"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
