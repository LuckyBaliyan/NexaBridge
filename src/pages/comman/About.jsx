import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-32">
      {/* Heading */}
      <h2 className="md:!text-5xl font-bold mb-6 leading-tighter">
        About NexaBridge – A Punjab Government Initiative
      </h2>

      {/* Introduction */}
      <p className="mb-6 text-lg leading-tight md:leading-normal">
        NexaBridge is an initiative by the Punjab Government designed to bridge the gap between alumni and current students.
        Our mission is to build a thriving, interactive community where alumni can share experiences, mentor students, and
        provide guidance to those navigating academic and professional milestones.
      </p>

      {/* Mission */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <p>
          To empower students across Punjab by connecting them with successful alumni, enabling knowledge-sharing,
          career support, and meaningful growth opportunities.
        </p>
      </div>

      {/* Vision */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <p>
          We aim to become the leading platform for alumni-student collaboration in Punjab — fostering academic excellence,
          career success, and a strong, lasting network of engaged alumni.
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className="border cursor-pointer border-[var(--Border)] p-4 rounded-md bg-white shadow-sm hover:shadow-md transition">
            <div className="mb-2 text-xl font-medium">🎓 Alumni Profiles</div>
            <p>Connect with alumni from diverse fields and backgrounds for guidance and support.</p>
          </div>
          <div className="border cursor-pointer border-[var(--Border)] p-4 rounded-md bg-white shadow-sm hover:shadow-md transition">
            <div className="mb-2 text-xl font-medium">🤝 Mentorship Programs</div>
            <p>Participate in mentorship programs tailored to your interests and goals.</p>
          </div>
          <div className="border cursor-pointer border-[var(--Border)] p-4 rounded-md bg-white shadow-sm hover:shadow-md transition">
            <div className="mb-2 text-xl font-medium">📚 Career Resources</div>
            <p>Access curated resources to prepare you for career decisions and job opportunities.</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mb-12">
        <img
          src="/images/galgotia.jpg"
          alt="Punjab Government Building"
          className="w-full rounded-lg shadow-lg object-cover max-h-[500px] mx-auto"
        />
      </div>

      {/* Contact */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-2">Mail Us</h3>
        <p>
          For questions, suggestions, or assistance, please email us at{' '}
          <a href="mailto:support@connectpunjab.com" className="text-[var(--Accent)] underline">
            support@connectpunjab.com
          </a>
          . We're here to help you make the most of your journey on NexaBridge.
        </p>
      </div>
    </div>
  );
}

