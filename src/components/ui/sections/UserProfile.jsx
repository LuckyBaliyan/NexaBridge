import React from "react";
import { useAuth } from "../../../context/AuthProvider";

const ProfileCard = () => {
  const {role} = useAuth();
  const user = {
    name: "Sophia Carter",
    title: "Product Manager at Tech Innovators Inc.",
    university: "University of Technology, Class of 2015",
    about:
      "Sophia Carter is a seasoned Product Manager at Tech Innovators Inc., driving innovation in consumer electronics. With a background in engineering and an MBA, she excels in bridging technical and business aspects of product development. Sophia is passionate about mentoring students and fostering the next generation of tech leaders.",
    experience: [
      {
        title: "Product Manager",
        years: "2018 - Present",
      },
      {
        title: "Associate Product Manager",
        years: "2015 - 2018",
      },
    ],
    education: [
      {
        degree: "MBA, Business Administration",
        years: "2013 - 2015",
      },
      {
        degree: "B.S., Electrical Engineering",
        years: "2009 - 2013",
      },
    ],
    expertise: [
      "Product Strategy",
      "Market Analysis",
      "Agile Development",
      "User Experience",
      "Team Leadership",
    ],
    opportunities: [
      {
        title: "Mentorship Program",
        term: "Fall 2024",
      },
      {
        title: "Product Management Internship",
        term: "Summer 2025",
      },
    ],
    batch: "2015",
    branch: "Electronics Engineering",
    institute: "University of Technology",
    cgpa: "8.9",
    sex: "Female",
    company: "Tech Innovators Inc.",
    availability: "Available", // change to "Unavailable" to test red color
    img: "/images/user.png",
  };

  return (
    <div className="max-w-4xl mx-auto mt-2 p-6 bg-white shadow-md rounded-md">
      {/* Header */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <img
      src={user.img}
      alt={user.name}
      className="w-24 h-24 rounded-full object-cover"
    />
    <div className="flex-1 w-full">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-700">{user.title}</p>
      <p className="text-sm text-gray-500">{user.university}</p>
  
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <button className="bg-[var(--Accent)] text-white px-4 py-1.5 rounded-md transition">
          Connect
        </button>
        <button className="border border-[var(--Border)] px-4 py-1.5 rounded-md bg-gray-200">Send Message</button>
        
        {/* Availability Status */}
        <span
          className={`text-sm font-semibold px-2 py-1 rounded ${
            user.availability === "Available"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {user.availability}
        </span>
  
        {/* Edit Profile Button */}
        <button className="ml-auto bg-[var(--Accent)] text-white px-4 py-1.5 rounded-md">
          Edit Profile
        </button>
      </div>
    </div>
    </div>

      {/* About */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-1">About</h3>
        <p className="text-gray-700">{user.about}</p>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div>
          <h3 className="font-semibold">Batch</h3>
          <p className="text-gray-700">{user.batch}</p>
        </div>
        <div>
          <h3 className="font-semibold">Branch</h3>
          <p className="text-gray-700">{user.branch}</p>
        </div>
        <div>
          <h3 className="font-semibold">Institute</h3>
          <p className="text-gray-700">{user.institute}</p>
        </div>
        <div>
          <h3 className="font-semibold">CGPA</h3>
          <p className="text-gray-700">{user.cgpa}</p>
        </div>
        <div>
          <h3 className="font-semibold">Sex</h3>
          <p className="text-gray-700">{user.sex}</p>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <p className="text-gray-700">{user.company}</p>
        </div>
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Experience</h3>
          {user.experience.map((exp, index) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              <span>📁</span>
              <div>
                <p className="font-medium">{exp.title}</p>
                <p className="text-sm text-gray-500">{exp.years}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Education</h3>
          {user.education.map((edu, index) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              <span>🎓</span>
              <div>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Areas of Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {user.expertise.map((skill, idx) => (
            <span
              key={idx}
              className="bg-[var(--Accent)] text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      {role ===  "alumni" &&
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Posted Opportunities</h3>
        <div className="space-y-2">
          {user.opportunities.map((opp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border border-[var(--Border)] p-3 rounded-md"
            >
              <span>📌</span>
              <div>
                <p className="font-medium">{opp.title}</p>
                <p className="text-sm text-gray-500">{opp.term}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       }
    </div>
  );
};

export default ProfileCard;
