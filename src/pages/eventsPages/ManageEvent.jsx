import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";

const ManageEvent = () => {
  const { currentUser, role, createEvent, updateEvent, events } = useAuth();
  const navigate = useNavigate();
  const { eventId } = useParams();

  const existingEvent = events.find((e) => e.id === Number(eventId));

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    date: "",
    endDate: "", // ✅ Added endDate
    time: "",
    location: "",
    img: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  // Prefill form if editing
  useEffect(() => {
    if (existingEvent) {
      setFormData({
        heading: existingEvent.heading || "",
        description: existingEvent.description || "",
        date: existingEvent.date || "",
        endDate: existingEvent.endDate || "", // ✅ Set endDate from existing event
        time: existingEvent.time || "",
        location: existingEvent.location || "",
        img: existingEvent.img || null,
      });
      setImagePreview(existingEvent.img || null);
    }
  }, [existingEvent]);

  if (!currentUser || role !== "alumni") {
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-600 text-lg">
        ❌ Only alumni can manage events
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img" && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, img: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const start = new Date(formData.date);
    const end = formData.endDate ? new Date(formData.endDate) : start;

    let status = "upcoming";

    if (now < start) {
      status = "upcoming";
    } else if (now >= start && now <= end) {
      status = "current";
    } else if (now > end) {
      status = "past";
    }

    const eventPayload = { ...formData, status };

    if (existingEvent) {
      updateEvent(Number(eventId), { ...existingEvent, ...eventPayload });
    } else {
      createEvent(eventPayload);
    }

    navigate("/events");
  };

  return (
    <div className="flex justify-center px-4 py-12 md:py-20">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          {existingEvent ? "Update Event" : "Create Event"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Heading */}
          <div>
            <label className="block mb-2 font-medium">Event Name</label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg h-28 resize-none"
              required
              maxLength={100}
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block mb-2 font-medium">End Date (Optional)</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium">Upload Event Image</label>
            <div className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full max-h-60 object-cover rounded-lg mb-4"
                />
              )}
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                id="eventImage"
              />
              <label
                htmlFor="eventImage"
                className="cursor-pointer px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Upload Image
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[var(--Accent)] text-white rounded-lg"
            >
              {existingEvent ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageEvent;



