import { 
  FaUsers, 
  FaBriefcase, 
  FaHandshake, 
  FaCalendarAlt,
  FaAddressBook,
  FaComments,
  FaCamera,
  FaNewspaper,
  FaHandHoldingHeart, 
  FaUniversity, 
  FaChartLine, 
  FaMapMarkedAlt,
} from "react-icons/fa";

const navLinks = {
  student: [
    { to: "/student/directory", label: "Alumni Directory" },
    { to: "/student/events", label: "Events" },
    { to: "/student/mentorship", label: "Mentorship" },
    { to: "/student/messages", label: "Messages" },
  ],
  alumni: [
    { to: "/alumni/profile", label: "Profile" },
    { to: "/alumni/opportunities", label: "Opportunities" },
    { to: "/alumni/requests", label: "Requests" },
    { to: "/alumni/events", label: "Events" },
    { to: "/alumni/messages", label: "Messages" },
  ],
};

const showCards = [
  {
    id: 1,
    icon: FaUsers,
    heading: "Alumni Engagement",
    para: "Maintain strong connections with alumni through events, news, and updates.",
  },
  {
    id: 2,
    icon: FaBriefcase,
    heading: "Career Services",
    para: "Offer career resources, job postings, and networking opportunities.",
  },
  {
    id: 3,
    icon: FaHandshake,
    heading: "Mentorship Programs",
    para: "Facilitate mentorship programs connecting current students with experienced alumni.",
  },
];

const featuresData = [
  {
    id: 1,
    icon: FaCalendarAlt,
    heading: "Event Management",
    para: "Organize reunions, virtual meetups, fundraising events, and webinars.",
  },
  {
    id: 2,
    icon: FaAddressBook,
    heading: "Alumni Directory",
    para: "A searchable directory to easily connect, find, and collaborate with alumni.",
  },
  {
    id: 3,
    icon: FaComments,
    heading: "Messaging & Calls",
    para: "Connect with others and schedule calls between alumni and students.",
  },
  {
    id: 4,
    icon: FaCamera,
    heading: "Photo Galleries",
    para: "Dedicated photo albums for alumni (and students) to relive memories.",
  },
  {
    id: 5,
    icon: FaNewspaper,
    heading: "News & Updates",
    para: "Keep your alumni informed with the latest news from your institution.",
  },
  {
    id: 6,
    icon: FaHandHoldingHeart,
    heading: "Giving Back",
    para: "Facilitate donation and fundraising campaigns to support your institution.",
  },
];



const storiesData = [
  {
    img: "/images/s1.webp",
    heading: "Secured Internship @ Amazon",
    name: "Rohit Sharma",
    story:
      "With guidance from alumni mentors, I landed my first big tech internship. Their insights on interviews and projects were a game-changer!",
    dets:
      "Rohit always dreamt of working at a top tech company. With the mentorship program, he refined his coding skills, practiced mock interviews, and learned industry-level project workflows. This support gave him the confidence to crack Amazon's competitive hiring process."
  },
  {
    img: "/images/s2.webp",
    heading: "Pursuing Masters @ Stanford",
    name: "Ananya Gupta",
    story:
      "Through NexaBridge connections, I was able to get strong recommendation letters and prep guidance for my higher studies abroad.",
    dets:
      "Ananya wanted to study in the US but lacked proper guidance for applications. With mentorship, she got help in drafting her Statement of Purpose, preparing for GRE exams, and securing recommendation letters from professors, which ultimately led to her admission at Stanford."
  },
  {
    img: "/images/s3.webp",
    heading: "Founder @ EduTech Startup",
    name: "Arjun Mehta",
    story:
      "Networking with seniors inspired me to build my own startup. Their mentorship helped me avoid early mistakes and grow faster.",
    dets:
      "Arjun had ideas but didn’t know where to begin. He learned about business models, funding, and scaling strategies from alumni who had built successful startups. Within a year, his EduTech platform started gaining traction among students and teachers."
  },
  {
    img: "/images/s4.webp",
    heading: "UX Designer @ Spotify",
    name: "Priya Nair",
    story:
      "The alumni design workshops polished my portfolio and gave me the confidence to crack interviews at top product companies.",
    dets:
      "Priya was passionate about design but lacked professional experience. With mock portfolio reviews and design critiques, she sharpened her skills and gained confidence. She eventually landed a role at Spotify, working on innovative user experiences."
  },
  {
    img:null,
    heading: "Data Scientist @ Google",
    name: "Kabir Malhotra",
    story:
      "I transitioned from a core engineering role to data science with the right mentorship and guidance.",
    dets:
      "Kabir had a background in mechanical engineering but wanted to pivot into data science. Alumni mentors guided him on courses, projects, and Kaggle competitions, helping him build a strong portfolio that led to his role at Google."
  },
  {
    img:null,
    heading: "MBA @ Harvard Business School",
    name: "Sneha Kapoor",
    story:
      "My mentors guided me through every step of the MBA application process, making my dream a reality.",
    dets:
      "Sneha received detailed guidance on her essays, GMAT preparation, and interview practice. She also connected with alumni already at HBS, which gave her insider perspectives on how to strengthen her application."
  },
  {
    img:null,
    heading: "Software Engineer @ Microsoft",
    name: "Vivek Rathi",
    story:
      "From coding contests to real interviews, alumni mentorship helped me bridge the gap.",
    dets:
      "Vivek participated in coding hackathons but struggled in interviews. Mentorship gave him mock interview practice, resume reviews, and personalized feedback, which helped him secure his dream job at Microsoft."
  },
  {
    img:null,
    heading: "PhD Research @ MIT",
    name: "Ritika Sen",
    story:
      "With the right guidance, I was able to publish papers and secure a PhD offer from MIT.",
    dets:
      "Ritika connected with research-focused mentors who helped her with paper writing, choosing journals, and preparing presentations for international conferences. Their inputs significantly boosted her research profile."
  },
  {
    img:null,
    heading: "Entrepreneur @ HealthTech Startup",
    name: "Karan Verma",
    story:
      "Alumni mentors helped me validate my business idea and connect with the right investors.",
    dets:
      "Karan’s idea for a health monitoring app needed expert validation. Mentors with entrepreneurial experience guided him in creating a solid pitch deck and introduced him to angel investors, helping his startup take off."
  },
  {
    img: null,
    heading: "AI Researcher @ OpenAI",
    name: "Meera Joshi",
    story:
      "Community support and mentorship gave me the confidence to pursue AI research full-time.",
    dets:
      "Meera was fascinated by AI but unsure how to specialize. Alumni researchers shared learning paths, datasets, and project ideas. Her contributions in open-source projects eventually helped her secure a position at OpenAI."
  },
  {
    img: null,
    heading: "Consultant @ McKinsey",
    name: "Aditya Rao",
    story:
      "The alumni network prepared me for consulting case interviews and boosted my confidence.",
    dets:
      "Aditya had strong analytical skills but struggled with case interviews. Alumni mentors conducted multiple mock case sessions, refined his approach, and improved his communication, ultimately leading to his McKinsey offer."
  },
  {
    img: null,
    heading: "Product Manager @ Meta",
    name: "Simran Kaur",
    story:
      "I transitioned into product management with the right mentorship and project experience.",
    dets:
      "Simran wanted to move from software engineering into product management. Mentors guided her in building cross-functional projects, understanding product strategy, and refining her storytelling skills, which helped her crack Meta's PM interview."
  },
];



const eventsData = [
  {
    date: "12-Sep-2025",
    heading: "Alumni Meet 2025",
    description:
      "Join us for our annual alumni meet where past and present students come together to network and share their journeys.",
    img: "/images/e1.jpg",
    buttonText: "View More",
  },
  {
    date: "05-Oct-2025",
    heading: "Tech Talk: AI in 2025",
    description:
      "A deep dive into the latest AI advancements hosted by industry experts. Open to students and alumni alike.",
    img: "/images/e2.jpg",
    buttonText: "Read More",
  },
  {
    date: "22-Nov-2025",
    heading: "Campus Placement News",
    description:
      "This year’s placement drive was a huge success with record-breaking offers from top companies.",
    img: "/images/e3.jpg",
    buttonText: "Explore",
  },
];


const statsData = [
  {
    icon: FaUsers,
    color: "#4CAF50", // Green
    value: 50000,
    suffix: "+",
    label: "Registered Alumni",
    sub: "Across all institutions",
  },
  {
    icon: FaUniversity,
    color: "#2196F3", // Blue
    value: 200,
    suffix: "+",
    label: "Partner Institutions",
    sub: "Universities & Colleges",
  },
  {
    icon: FaChartLine,
    color: "#FF9800", // Orange
    value: 95,
    suffix: "%",
    label: "Success Rate",
    sub: "Alumni satisfaction",
  },
  {
    icon: FaMapMarkedAlt,
    color: "#9C27B0", // Purple
    value: 22,
    suffix: "",
    label: "Districts Covered",
    sub: "Across Punjab",
  },
  {
    icon: FaBriefcase,
    color: "#F44336", // Red
    value: 15000,
    suffix: "+",
    label: "Career Opportunities",
    sub: "Shared via platform",
  },
];

const causes = [
    {
      title: "Student Scholarship Fund",
      description:
        "Empower the next generation of leaders by contributing to scholarships.",
      raised: 22500,
      goal: 50000,
      color: "bg-pink-500",
    },
    {
      title: "Innovation Lab",
      description:
        "Fund cutting-edge research and provide state-of-the-art equipment.",
      raised: 75000,
      goal: 100000,
      color: "bg-green-500",
    },
    {
      title: "Community Outreach",
      description:
        "Support programs that make a positive impact in our local community.",
      raised: 30000,
      goal: 50000,
      color: "bg-orange-400",
    },
];

export {navLinks,showCards,featuresData,storiesData,eventsData,statsData,causes};