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
    story:
      "With guidance from alumni mentors, I landed my first big tech internship. Their insights on interviews and projects were a game-changer!",
  },
  {
    img: "/images/s2.webp",
    heading: "Pursuing Masters @ Stanford",
    story:
      "Through NexaBridge connections, I was able to get strong recommendation letters and prep guidance for my higher studies abroad.",
  },
  {
    img: "/images/s3.webp",
    heading: "Founder @ EduTech Startup",
    story:
      "Networking with seniors inspired me to build my own startup. Their mentorship helped me avoid early mistakes and grow faster.",
  },
  {
    img: "/images/s4.webp",
    heading: "UX Designer @ Spotify",
    story:
      "The alumni design workshops polished my portfolio and gave me the confidence to crack interviews at top product companies.",
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