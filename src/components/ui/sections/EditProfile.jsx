import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    major: "",
    graduationYear: "",
    industry: "",
    jobTitle: "",
    about: "",
    experience: [{ role: "", company: "", years: "" }],
    education: [{ degree: "", institution: "", years: "", cgpa: "" }],
    expertise: [],
    opportunities: [{ title: "", type: "", year: "" }],
  });

  const [profileImg, setProfileImg] = useState("/images/user.png");

  return (
    <div className="max-w-5xl mt-6 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-[var(--Accent)] object-cover"
          />
          <label className="mt-4 cursor-pointer border border-[var(--Accent)] text-[var(--Accent)] px-4 py-2 rounded hover:bg-[var(--Accent)] hover:text-white">
            Upload New Picture
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Form Sections */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Info */}
          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="font-semibold text-lg mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* About */}
          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="font-semibold text-lg mb-4">About</h2>
            <textarea
              placeholder="Write something about yourself..."
              className="border p-2 rounded w-full h-24"
            />
          </div>

          {/* Experience */}
          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="font-semibold text-lg mb-4">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Role"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Company"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Years (e.g. 2018-2021)"
                className="border p-2 rounded w-full"
              />
            </div>
            <button type="button" className="text-[var(--Accent)]">
              + Add Experience
            </button>
          </div>

          {/* Education */}
          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="font-semibold text-lg mb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Degree"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Institution"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Years (e.g. 2010-2014)"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="CGPA"
                className="border p-2 rounded w-full"
              />
            </div>
            <button type="button" className="text-[var(--Accent)]">
              + Add Education
            </button>
          </div>

          {/* Expertise */}
          <div className="p-6 bg-white shadow rounded-md">
            <h2 className="font-semibold text-lg mb-4">Areas of Expertise</h2>
            <input
              type="text"
              placeholder="Add expertise separated by commas"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              type="button"
              className="px-6 py-2 rounded border border-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              type="submit"
              className="px-6 py-2 rounded bg-[var(--Accent)] text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;




