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

export {navLinks,showCards,featuresData};