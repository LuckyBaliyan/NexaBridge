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
    { to: "/alumniDirectory", label: "Alumni Directory" },
    { to: "/events", label: "Events" },
    { to: "/mentorship", label: "Mentorship" },
    { to: "/messages", label: "Messages" },
    {to: "/donations", label: "Donations"},
  ],
  alumni: [
    { to: "/alumniDirectory", label: "Connections" },
    { to: "/opportunities", label: "Opportunities" },
    { to: "/requests", label: "Requests" },
    { to: "/events", label: "Events" },
    { to: "/messages", label: "Messages" },
    {to: "/donations", label: "Donations"},
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
    id: "amazon-internship",
    img: "/images/s1.webp",
    heading: "Secured Internship @ Amazon",
    name: "Priya Sharma",
    story:
      "With guidance from alumni mentors, I landed my first big tech internship. Their insights on interviews and projects were a game-changer!",
    dets: `Priya always dreamt of working at a top tech company. With the mentorship program, she refined her coding skills, practiced mock interviews, and learned industry-level project workflows. This support gave her the confidence to crack Amazon's competitive hiring process.  

    Initially, she faced multiple rejections due to weak problem-solving speed and lack of clarity in system design rounds. Mentors guided her to follow structured frameworks for tackling coding problems, practice under time pressure, and prepare behavioral answers aligned with Amazon’s leadership principles.  

    Within six months, Priya not only improved her technical performance but also built a stronger professional network. She finally secured her first internship at Amazon, which became a turning point in her career journey and gave her the industry exposure she needed.`
  },
  {
    id: "masters-stanford",
    img: "/images/s2.webp",
    heading: "Pursuing Masters @ Stanford",
    name: "Ananya Gupta",
    story:
      "Through NexaBridge connections, I was able to get strong recommendation letters and prep guidance for my higher studies abroad.",
    dets: `Ananya wanted to study in the US but lacked proper guidance for applications. With mentorship, she got help in drafting her Statement of Purpose, preparing for GRE exams, and securing recommendation letters from professors, which ultimately led to her admission at Stanford.  

    She worked closely with mentors who had previously studied abroad. They reviewed her essays multiple times, provided feedback on structuring her achievements, and helped her highlight her leadership roles. This refined her application and gave it a strong narrative.  

    Beyond academics, she learned how to present herself as a well-rounded candidate with extracurricular impact and future goals. Today, Ananya is pursuing her Masters at Stanford, building an international research network and gaining global exposure that will shape her career in technology and policy.`
  },
  {
    id: "founder-edutech",
    img: "/images/s3.webp",
    heading: "Founder @ EduTech Startup",
    name: "Arjun Mehta",
    story:
      "Networking with seniors inspired me to build my own startup. Their mentorship helped me avoid early mistakes and grow faster.",
    dets: `Arjun had ideas but didn’t know where to begin. He learned about business models, funding, and scaling strategies from alumni who had built successful startups. Within a year, his EduTech platform started gaining traction among students and teachers.  

    At first, he struggled with product-market fit and repeated funding rejections. Mentors encouraged him to validate his idea with surveys, pilot launches, and user interviews before pitching to investors. This saved him months of wasted effort and gave him clarity on customer needs.  

    With alumni guidance, Arjun successfully raised seed funding, hired his first team, and launched a product that is now used by thousands of students across India. His journey shows how the right mentorship can save years of trial and error.`
  },
  {
    id: "ux-spotify",
    img: "/images/s4.webp",
    heading: "UX Designer @ Spotify",
    name: "Priya Nair",
    story:
      "The alumni design workshops polished my portfolio and gave me the confidence to crack interviews at top product companies.",
    dets: `Priya was passionate about design but lacked professional experience. With mock portfolio reviews and design critiques, she sharpened her skills and gained confidence. She eventually landed a role at Spotify, working on innovative user experiences.  

    Initially, her portfolio was scattered and lacked storytelling. Mentors helped her restructure her case studies to showcase design thinking, user empathy, and business impact. She also practiced whiteboard challenges and design critique sessions with senior designers.  

    This preparation helped her stand out in interviews, and today she contributes to Spotify’s design system, building features that millions of users interact with daily.`
  },
  {
    id: "ds-google",
    img: null,
    heading: "Data Scientist @ Google",
    name: "Kabir Malhotra",
    story:
      "I transitioned from a core engineering role to data science with the right mentorship and guidance.",
    dets: `Kabir had a background in mechanical engineering but wanted to pivot into data science. Alumni mentors guided him on courses, projects, and Kaggle competitions, helping him build a strong portfolio that led to his role at Google.  

    He started from scratch, learning Python, SQL, and machine learning fundamentals. Mentors gave him structured learning paths, recommended datasets to practice, and taught him how to showcase projects on GitHub.  

    Within a year, Kabir built multiple end-to-end projects, won Kaggle competitions, and strengthened his resume. With alumni guidance on interviews and case studies, he successfully transitioned into a Data Scientist role at Google.`
  },
  {
    id: "mba-harvard",
    img: null,
    heading: "MBA @ Harvard Business School",
    name: "Sneha Kapoor",
    story:
      "My mentors guided me through every step of the MBA application process, making my dream a reality.",
    dets: `Sneha received detailed guidance on her essays, GMAT preparation, and interview practice. She also connected with alumni already at HBS, which gave her insider perspectives on how to strengthen her application.  

    Her first attempt at GMAT was disappointing, but alumni helped her identify weaknesses and recommended targeted study resources. On her second attempt, she scored 740, which made her profile highly competitive.  

    With continuous mentorship, she crafted essays that showcased her leadership impact and career goals. Today, Sneha is pursuing her MBA at Harvard, preparing for leadership roles in global consulting.`
  },
  {
    id: "swe-microsoft",
    img: null,
    heading: "Software Engineer @ Microsoft",
    name: "Vivek Rathi",
    story:
      "From coding contests to real interviews, alumni mentorship helped me bridge the gap.",
    dets: `Vivek participated in coding hackathons but struggled in real interviews due to communication gaps and lack of structured answers. Alumni mentors helped him with mock interviews, resume reviews, and personalized feedback.  

    He learned how to explain his problem-solving approach step by step, which made him more confident in technical discussions. Mentors also guided him on projects that demonstrated practical application of algorithms in real-world scenarios.  

    These improvements helped him secure his dream job as a Software Engineer at Microsoft, where he now works on cloud technologies.`
  },
  {
    id: "phd-mit",
    img: null,
    heading: "PhD Research @ MIT",
    name: "Ritika Sen",
    story:
      "With the right guidance, I was able to publish papers and secure a PhD offer from MIT.",
    dets: `Ritika connected with research-focused mentors who helped her with paper writing, choosing journals, and preparing presentations for international conferences. Their inputs significantly boosted her research profile.  

    She initially struggled with academic writing and rejection from conferences. Mentors taught her how to structure arguments, improve clarity, and position her research within global trends.  

    With this support, Ritika successfully published multiple papers in reputed journals, presented at conferences, and eventually received an offer for PhD at MIT.`
  },
  {
    id: "entrepreneur-healthtech",
    img: null,
    heading: "Entrepreneur @ HealthTech Startup",
    name: "Karan Verma",
    story:
      "Alumni mentors helped me validate my business idea and connect with the right investors.",
    dets: `Karan’s idea for a health monitoring app needed validation. Mentors with entrepreneurial experience guided him in refining his business model, preparing a solid pitch deck, and introducing him to investors.  

    He learned how to analyze competitors, build a minimum viable product (MVP), and gather early customer feedback. This practical approach reduced risks and helped him pivot quickly when needed.  

    With alumni connections, Karan pitched successfully to angel investors and raised his first round of funding. Today, his HealthTech startup is gaining traction among hospitals and fitness enthusiasts.`
  },
  {
    id: "ai-openai",
    img: null,
    heading: "AI Researcher @ OpenAI",
    name: "Meera Joshi",
    story:
      "Community support and mentorship gave me the confidence to pursue AI research full-time.",
    dets: `Meera was fascinated by AI but unsure how to specialize. Alumni researchers shared structured learning paths, datasets, and project ideas. Their mentorship helped her build expertise in deep learning and reinforcement learning.  

    She contributed to open-source AI projects, which increased her visibility in the research community. Mentors also guided her on publishing papers, participating in hackathons, and applying for research fellowships.  

    Eventually, her contributions and persistence helped her secure a role at OpenAI, where she now works on cutting-edge AI research.`
  },
  {
    id: "consultant-mckinsey",
    img: null,
    heading: "Consultant @ McKinsey",
    name: "Aditya Rao",
    story:
      "The alumni network prepared me for consulting case interviews and boosted my confidence.",
    dets: `Aditya had strong analytical skills but struggled with consulting-style case interviews. Alumni mentors conducted multiple mock sessions, refined his communication, and taught him structured frameworks for problem solving.  

    He practiced real-life business scenarios, learned to manage time, and improved his presentation skills. With feedback from experienced consultants, he became confident in tackling any case.  

    Aditya’s preparation paid off when he received an offer from McKinsey, where he now works on global strategy projects.`
  },
  {
    id: "pm-meta",
    img: null,
    heading: "Product Manager @ Meta",
    name: "Simran Kaur",
    story:
      "I transitioned into product management with the right mentorship and project experience.",
    dets: `Simran wanted to move from software engineering into product management but didn’t know how to bridge the gap. Alumni mentors guided her in building cross-functional projects, understanding product strategy, and refining her storytelling skills.  

    She worked on side projects that involved real users, conducted market research, and built pitch decks to present to mentors. Their constant feedback helped her gain confidence in product thinking.  

    Eventually, she cleared Meta’s challenging PM interviews and is now shaping features that impact millions of users worldwide.`
  }
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