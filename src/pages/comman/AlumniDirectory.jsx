import { useState } from "react";
import { useNavigate } from "react-router-dom";

const alumniData = [
  {
    name: "Sophia Carter",
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    desc: "Passionate about mentoring junior developers and specializing in web development and cloud technologies.",
    industry: "Tech",
    graduationYear: "2015",
    location: "San Francisco",
    skills: ["Web Development", "Cloud"]
  },
  {
    name: "Ethan Bennett",
    title: "Marketing Director",
    company: "Global Brands Co.",
    desc: "Over 10 years in brand management. Open to networking and providing career advice.",
    industry: "Marketing",
    graduationYear: "2012",
    location: "New York",
    skills: ["Branding", "Strategy"]
  },
  {
    name: "Olivia Hayes",
    title: "Financial Analyst",
    company: "Capital Investments Group",
    desc: "Strong background in investment analysis. Eager to connect with students interested in finance.",
    industry: "Finance",
    graduationYear: "2016",
    location: "Chicago",
    skills: ["Finance", "Investment"]
  },
  {
    name: "Liam Walker",
    title: "Product Manager",
    company: "Innovate Solutions Ltd.",
    desc: "Track record of launching successful products. Available for mentorship and career discussions.",
    industry: "Tech",
    graduationYear: "2014",
    location: "Los Angeles",
    skills: ["Product Management", "Leadership"]
  },
  {
    name: "Ava Thompson",
    title: "Data Scientist",
    company: "Data Insights Corp.",
    desc: "Specializing in machine learning and data analysis. Interested in connecting with students.",
    industry: "Data Science",
    graduationYear: "2018",
    location: "Boston",
    skills: ["Machine Learning", "Data Analysis"]
  }
];

export default function AlumniDirectory() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");

  const navigate = useNavigate();

  const filteredAlumni = alumniData.filter((alum) => {
    return (
      (search === "" || alum.name.toLowerCase().includes(search.toLowerCase()) || alum.title.toLowerCase().includes(search.toLowerCase())) &&
      (industry === "" || alum.industry === industry) &&
      (year === "" || alum.graduationYear === year) &&
      (location === "" || alum.location === location) &&
      (skills === "" || alum.skills.includes(skills))
    );
  });

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto py-16 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold text-center mb-2">Alumni Directory</h1>
      <p className="text-center text-gray-600 mb-6">Discover and connect with alumni from your institution.</p>

      {/* FILTERS - Modified to be in a row */}
      <div className="flex flex-row flex-wrap gap-4 items-center justify-center mb-8">
        <input
          placeholder="Search alumni by name, industry, or skills"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[240px] max-w-[300px] py-2 px-4 border border-[var(--Border)] rounded-lg outline-0 bg-white"
        />

        <select onChange={(e) => setIndustry(e.target.value)} value={industry} className="min-w-[160px] p-2 border rounded border-[var(--Border)] bg-white text-[var(--Text)]">
          <option value="">Industry</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Data Science">Data Science</option>
        </select>

        <select onChange={(e) => setYear(e.target.value)} value={year} className="min-w-[160px] p-2 border rounded">
          <option value="">Graduation Year</option>
          <option value="2012">2012</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2018">2018</option>
        </select>

        <select onChange={(e) => setLocation(e.target.value)} value={location} className="min-w-[160px] p-2 border rounded">
          <option value="">Location</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Boston">Boston</option>
        </select>

        <select onChange={(e) => setSkills(e.target.value)} value={skills} className="min-w-[160px] p-2 border rounded">
          <option value="">Skills</option>
          <option value="Web Development">Web Development</option>
          <option value="Cloud">Cloud</option>
          <option value="Branding">Branding</option>
          <option value="Strategy">Strategy</option>
          <option value="Finance">Finance</option>
          <option value="Investment">Investment</option>
          <option value="Product Management">Product Management</option>
          <option value="Leadership">Leadership</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Data Analysis">Data Analysis</option>
        </select>
      </div>

      {/* === LIST VIEW FOR MOBILE === */}
      <div className="flex flex-col gap-4 sm:hidden">
        {filteredAlumni.map((alum, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white shadow p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <img
                src="/images/user.png"
                alt={alum.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-base font-semibold">{alum.name}</h4>
                <p className="text-sm text-gray-600">{alum.title} at {alum.company}</p>
              </div>
            </div>
            <button className="ml-auto text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200 transition">
              Connect
            </button>
          </div>
        ))}
      </div>

      {/* === CARD GRID VIEW FOR SCREENS >= SM === */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {filteredAlumni.map((alum, idx) => (
          <div
            key={idx}
            className="bg-white relative rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="absolute w-full h-[30%] top-0 left-0 bg-[var(--Accent)]"></div>
            <div
              className="w-24 h-24 mt-4 z-[20] border-4 border-white relative self-center justify-center aspect-square rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${'/images/user.png'})` }}
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg text-center font-semibold mb-2">{alum.name}</h3>
              <p className="text-sm text-center text-blue-600 font-medium">{alum.title}</p>
              <p className="text-sm text-center text-gray-600">{alum.company}</p>
              <p className="text-sm text-center text-gray-500 flex-grow mt-2">{alum.desc}</p>
              <div className="flex justify-center gap-3 mt-4">
                <button className="px-4 py-2 bg-[var(--Accent)] text-white text-sm rounded-lg shadow hover:opacity-90 active:scale-95 transition-transform">
                  View Profile
                </button>
                <button onClick={()=>navigate('/connect')} className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg shadow hover:bg-gray-300 active:scale-95 transition-transform">
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



