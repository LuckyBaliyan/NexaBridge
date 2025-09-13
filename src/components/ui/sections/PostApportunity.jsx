import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

export default function PostOpportunity() {
  const navigate = useNavigate();
  const {role} = useAuth();

  const [search, setSearch] = useState("");
  const [opportunities] = useState([
    { title: "Finance Intern", company: "Global Investments", location: "New York, NY", type: "Internship" },
    { title: "Marketing Intern", company: "Trendsetters Inc.", location: "Remote", type: "Internship" },
    { title: "Jr. Software Engineer", company: "Tech Innovators", location: "San Francisco, CA", type: "Job" },
  ]);

  // Filter opportunities based on search input
  const filteredOpps = opportunities.filter(
    (opp) =>
      opp.title.toLowerCase().includes(search.toLowerCase()) ||
      opp.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen">
      {/* Dynamic Title */}
      <h2 className="text-2xl font-bold mb-6">
        {role === "student" ? "Opportunities" : "Post Opportunity"}
      </h2>

      {/* Post Opportunity Form (hidden for students) */}
      {role !== "student" && (
        <div className="bg-white shadow border border-gray-200 rounded-lg p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border border-[var(--Border)] px-3 py-2 rounded-lg" placeholder="Job Title" />
            <input className="border border-[var(--Border)] px-3 py-2 rounded-lg" placeholder="Company" />
            <input className="border border-[var(--Border)] px-3 py-2 rounded-lg" placeholder="Location" />
            <select className="border border-[var(--Border)] px-3 py-2 rounded-lg">
              <option>Type of Opportunity</option>
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <textarea
            className="border border-[var(--Border)] px-3 py-2 rounded-lg w-full mt-4"
            placeholder="Description"
          ></textarea>
          <button className="mt-4 px-4 py-2 bg-[var(--Accent)] text-white rounded-lg shadow">
            Post Opportunity
          </button>
        </div>
      )}

      {/* View Opportunities */}
      <h2 className="text-2xl font-bold mb-6">Available Opportunities</h2>
      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm w-full md:w-2/3 mb-6">
        <input
          type="text"
          placeholder="Search by title or company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none border-0"
        />
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {filteredOpps.length > 0 ? (
          filteredOpps.map((opp, i) => (
            <div
              key={i}
              className="bg-white shadow border border-gray-200 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{opp.title}</h3>
                <p className="text-gray-500">{opp.company}</p>
                <p className="text-gray-400 text-sm">{opp.location}</p>
                <span className="text-sm text-[var(--Accent)] font-medium">
                  {opp.type}
                </span>
              </div>
              <button className="px-4 py-2 bg-[var(--Accent)] text-white rounded-lg shadow">
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No opportunities found.</p>
        )}
      </div>

      {/* View All Opportunities Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/opportunities")}
          className="px-6 py-2 bg-[var(--Accent)] text-white rounded-lg shadow hover:opacity-90"
        >
          View All Opportunities
        </button>
      </div>
    </div>
  );
}


