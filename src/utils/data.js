import { FaUserGroup, FaBriefcase, FaHandshake } from "react-icons/fa";

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
    icon: FaUserGroup,
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

export {navLinks,showCards};