import React from 'react';

export default function Apportunity() {
  return (
   <main className='px-4 py-32'>
     <div className="max-w-4xl mx-auto px-6 py-6  bg-white">
      {/* Title */}
      <h1 className="text-2xl font-bold text-black  uppercase">Software Engineer</h1>
      <p className="text-gray-600 mb-6">Tech Innovators Inc. – San Francisco, CA</p>

      {/* Banner Image */}
      <div className='w-full h-80 mt-6'>
        <img
        src="/images/d.jpg"
        alt="Office space"
        className="w-full h-full rounded-lg object-cover mb-4"
      />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-6">
        <span className="px-3 py-1 text-sm border border-[var(--Border)] rounded-full text-gray-700">Full-time</span>
        <span className="px-3 py-1 text-sm border border-[var(--Border)] rounded-full text-gray-700">Remote</span>
      </div>

      {/* Job Description */}
      <div className="mt-6">
        <h5 className="font-black font-[nunito-medium] mt-2">Job Description</h5>
        <p className="text-gray-700 leading-normal">
          We are seeking a talented and motivated Software Engineer to join our dynamic team at Tech Innovators Inc.
          As a Software Engineer, you will be responsible for designing, developing, and maintaining high-quality software
          solutions. You will collaborate with cross-functional teams to understand project requirements and translate them
          into functional code. The ideal candidate will have a strong background in software development, excellent
          problem-solving skills, and a passion for creating innovative solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h5 className="font-bold font-[nunito-medium] mb-2">Technical Skills</h5>
        <div className="flex gap-3 flex-wrap">
          <span className="px-3 py-1 bg-[var(--Accent)] text-white border border-[var(--Border)] rounded-full text-sm ">Java</span>
          <span className="px-3 py-1 bg-[var(--Accent)] text-white border border-[var(--Border)] rounded-full text-sm ">Python</span>
          <span className="px-3 py-1 bg-[var(--Accent)] text-white border border-[var(--Border)] rounded-full text-sm ">C++</span>
        </div>
      </div>

      {/* Requirements */}
      <div className="mt-6">
        <h5 className="font-bold font-[nunito-medium]  mb-2">Requirements</h5>
        <p className="text-gray-700 leading-normal">
          Design and develop software applications according to project specifications. Write clean, efficient, and
          well-documented code. Collaborate with team members to ensure seamless integration of software components.
          Participate in code reviews and provide constructive feedback.
        </p>
      </div>

      {/* Qualifications */}
      <div className="mt-6">
        <h5 className="font-bold font-[nunito-medium]  mb-2">Qualifications</h5>
        <p className="text-gray-700 leading-normal">
          Bachelor’s degree in Computer Science or a related field. Proven experience in software development with
          proficiency in programming languages. Strong understanding of data structures, algorithms, and software design
          principles. Excellent communication and teamwork skills.
        </p>
      </div>

      {/* Benefits */}
      <div className="mt-8">
        <h5 className="font-bold font-[nunito-medium]  mb-2">Benefits and Perks</h5>
        <p className="text-gray-700 leading-normal">
          Comprehensive health, dental, and vision insurance. Generous paid time off and holiday schedule. 401(k) matching
          program. Professional development opportunities and tuition reimbursement. Employee assistance program. On-site
          gym and wellness programs. Flexible work arrangements.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <button className="px-5 py-2 bg-[var(--Accent)] text-white rounded hover:opacity-90 transition">
          Apply Now
        </button>
        <button className="px-5 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition">
          Share
        </button>
      </div>
    </div>
   </main>
  );
}
