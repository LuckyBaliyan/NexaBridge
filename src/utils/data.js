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

export {navLinks,showCards,featuresData,storiesData};