import React from 'react';
import { toast } from 'react-toastify';

export default function Contact() {
    const handleSubmit = (e)=>{
        e.preventDefault();

        toast.success("Sent!")
    }
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 lg:py-32">
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="font-extrabold mb-2 tracking-tight ">Contact Us</h1>
        <p className="text-base text-gray-600">
          We're here to help! Reach out to us through any of the methods below.
        </p>
      </div>

      {/* Address + Map */}
      <div className="mb-10 flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-sm">
        {/* Left - Address */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h4 className="text-3xl font-bold text-black leading-tight mb-2">
            Galgotias <br /> University
          </h4>
          <p className="text-gray-700 text-sm">
            Plot No. 2, Sector 17-A, Yamuna Expressway,<br />
            Greater Noida, Gautam Buddh Nagar,<br />
            Uttar Pradesh – 203201, India.
          </p>
        </div>

        {/* Right - Map */}
        <img
          src="/images/map.png"
          alt="Galgotias University Location"
          className="w-full md:w-1/2 max-h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="text-sm mb-4 text-gray-600">
          For general inquiries, please contact us via email or phone. Our team is available to assist you during business hours.
        </p>

        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="text-[var(--Accent)] text-lg">📧</span>
            <a href="mailto:connect.punjab@email.com" className="text-[var(--Accent)] hover:underline">
              connect.punjab@email.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[var(--Accent)] text-lg">📞</span>
            <a href="tel:+911234567890" className="text-[var(--Accent)] hover:underline">
              +91-123-456-7890
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
        <p className="text-sm mb-6 text-gray-600">
          If you have specific questions or need further assistance, please fill out the form below.
          We’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white border border-[var(--Border)] rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white border border-[var(--Border)] rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="w-full bg-white border border-[var(--Border)] rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              placeholder="Enter your message"
              rows="5"
              className="w-full bg-white border border-[var(--Border)] rounded px-4 py-2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[var(--Accent)] text-white px-6 py-2 rounded hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

