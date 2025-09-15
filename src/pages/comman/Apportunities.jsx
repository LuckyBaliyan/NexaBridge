import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mainbtn from '../../components/ui/Buttons/Mainbtn';
import { useAuth } from '../../context/AuthProvider';

const jobData = [
  {
    title: 'Software Engineer',
    company: 'Tech Innovators Inc.',
    location: 'San Francisco, CA',
    image: '/images/user.png',
    type: 'job',
    sector: 'Engineering',
    experienceLevel: 'Entry',
    mode: 'Onsite',
  },
  {
    title: 'Marketing Intern',
    company: 'Global Marketing Solutions',
    location: 'New York, NY',
    image: '/images/user.png',
    type: 'internship',
    sector: 'Marketing',
    experienceLevel: 'Entry',
    mode: 'Remote',
  },
  {
    title: 'Financial Analyst',
    company: 'Investment Group LLC',
    location: 'Chicago, IL',
    image: '/images/user.png',
    type: 'job',
    sector: 'Finance',
    experienceLevel: 'Mid',
    mode: 'Hybrid',
  },
  {
    title: 'Data Scientist',
    company: 'Data Driven Decisions Corp',
    location: 'Austin, TX',
    image: '/images/user.png',
    type: 'job',
    sector: 'Engineering',
    experienceLevel: 'Senior',
    mode: 'Remote',
  },
  {
    title: 'UX/UI Designer',
    company: 'Creative Design Studio',
    location: 'Los Angeles, CA',
    image: '/images/user.png',
    type: 'job',
    sector: 'Design',
    experienceLevel: 'Mid',
    mode: 'Onsite',
  },
  {
    title: 'Product Manager',
    company: 'Product Pioneers Ltd.',
    location: 'Seattle, WA',
    image: '/images/user.png',
    type: 'job',
    sector: 'Management',
    experienceLevel: 'Senior',
    mode: 'Hybrid',
  },
  {
    title: 'Sales Representative',
    company: 'Sales Success Systems',
    location: 'Boston, MA',
    image: '/images/user.png',
    type: 'job',
    sector: 'Sales',
    experienceLevel: 'Entry',
    mode: 'Onsite',
  },
  {
    title: 'Customer Support Specialist',
    company: 'Customer Care Solutions',
    location: 'Denver, CO',
    image: '/images/user.png',
    type: 'job',
    sector: 'Support',
    experienceLevel: 'Entry',
    mode: 'Remote',
  },
  {
    title: 'Operations Manager',
    company: 'Operational Excellence Group',
    location: 'Atlanta, GA',
    image: '/images/user.png',
    type: 'job',
    sector: 'Operations',
    experienceLevel: 'Mid',
    mode: 'Hybrid',
  },
  {
    title: 'Human Resources Assistant',
    company: 'People Power Partners',
    location: 'Miami, FL',
    image: '/images/event.png',
    type: 'internship',
    sector: 'HR',
    experienceLevel: 'Entry',
    mode: 'Onsite',
  },
];

export default function Opportunities() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    sector: '',
    experienceLevel: '',
    mode: '',
  });

  const navigate = useNavigate();
  const {role} = useAuth();

  const filterOptions = {
    type: ['job', 'internship'],
    sector: [
      'Engineering', 'Marketing', 'Finance', 'Design', 'Management',
      'Sales', 'Support', 'Operations', 'HR'
    ],
    experienceLevel: ['Entry', 'Mid', 'Senior'],
    mode: ['Onsite', 'Remote', 'Hybrid'],
  };

  const handleFilter = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: prev[field] === value ? '' : value, // toggle
    }));
  };

  const filteredJobs = jobData.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase()) &&
    (filters.type ? job.type === filters.type : true) &&
    (filters.sector ? job.sector === filters.sector : true) &&
    (filters.experienceLevel ? job.experienceLevel === filters.experienceLevel : true) &&
    (filters.mode ? job.mode === filters.mode : true)
  );

  return (
    <div className="py-6 md:py-24 lg:py-32 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Explore Opportunities</h2>

      {/* Search inputs */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by job or internship"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[250px] px-4 py-2 rounded border border-[var(--Border)] bg-white"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 min-w-[250px] px-4 py-2 rounded border border-[var(--Border)] bg-white"
        />
      </div>

      {/* Filter tabs */}
      <div className="mb-8 space-y-4">
        {Object.keys(filterOptions).map((field) => (
          <div key={field}>
            <h5 className="font-medium capitalize  mb-2">{field.replace(/([A-Z])/g, ' $1')}</h5>
            <div className="flex flex-wrap gap-2">
              {filterOptions[field].map(option => (
                <button
                  key={option}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    filters[field] === option
                      ? 'bg-[var(--Accent)] text-white'
                      : 'border-[var(--Border)] text-black bg-white'
                  } transition`}
                  onClick={() => handleFilter(field, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Post Opportunity Button if alumni login */}
      {role === 'alumni' && (
      <div className='flex justify-center mb-8 items-center'>
        <Mainbtn onClick={()=>navigate('/createApportunity')} text="Post an Opportunity" className='bg-[var(--Accent)] text-white'/>
      </div>
      )}
      {/* Job cards */}
      <div className="flex flex-col gap-6">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center border border-[var(--Border)] rounded-lg bg-white p-4 gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-1 w-full">
              <p className="text-sm text-gray-500 mb-1">Posted by {job.company}</p>
              <h3 className="text-lg font-semibold text-[var(--Text)]">{job.title}</h3>
              <p className="text-gray-600 text-sm mt-1 mb-4">{job.location}</p>
              <button
                onClick={() => navigate('/opportunity')}
                className="px-4 py-2 bg-[var(--Accent)] text-white rounded hover:opacity-90 transition"
              >
                View
              </button>
            </div>
            <img
              src={'/images/d.jpg'}
              alt={job.title}
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500">No opportunities found.</p>
        )}
      </div>
    </div>
  );
}




