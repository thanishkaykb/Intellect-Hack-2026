/**
 * ============================================================
 * INTELLECT HACK 2026 — SINGLE SOURCE OF CONFIGURATION
 * ------------------------------------------------------------
 * Edit the links and phone numbers below when official values
 * become available. Nothing else in the app hardcodes them.
 * ============================================================
 */

/** Official Google Form for the online preliminary round (PPT submission). */
export const GOOGLE_FORM_URL = "https://forms.gle/6eSchWCgyKgiRTZc6";

/** Official WhatsApp community group for participants. */
export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/FIj1eHTejVzAxyKJICv2RC?s=sh&p=a&mlu=4";

/** Official registration platform links. */
export const REGISTRATION_LINKS = {
  gform: GOOGLE_FORM_URL, // registration + PPT submission happen on the same Google Form
};

/** Primary "Register Now" destination (falls back to the registration section). */
export const PRIMARY_REGISTER_URL = "#register";

export const PHONE_PLACEHOLDER = "+91 XXXXX XXXXX";

export const EVENT = {
  name: "INTELLECT HACK 2026",
  tagline: "AI Hackathon | 6 hours",
  motto: "Innovate. Build. Demonstrate.",
  organizer: "IEEE Reliability Society • SEC SBC",
  date: "23 SEPTEMBER 2026",
  venue: "APPLE HALL",
  location: "SRI SAIRAM ENGINEERING COLLEGE, CHENNAI",
  college: "SRI SAIRAM ENGINEERING COLLEGE, CHENNAI",
  duration: "6 Hours",
  teamSize: "2–4 Members per Team",
  fee: "₹200 per Team (if selected)",
  eligibility: "2nd, 3rd & 4th year students, all departments",
  certificate: "Certificates for both online and offline round",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Problem Statement", href: "#problems" },
  { label: "PPT Template", href: "#template" },
  { label: "Grand Finale", href: "#finale" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Coordinators", href: "#coordinators" },
];

export const EVENT_FACTS = [
  { label: "EVENT TYPE", value: "Competition / AI Hackathon" },
  { label: "DURATION", value: "6 Hours" },
  { label: "DATE", value: "23 September 2026" },
  { label: "VENUE", value: "Apple Hall" },
  { label: "TEAM SIZE", value: "2–4 Members per Team" },
  { label: "REGISTRATION FEE", value: "₹200 per Team (if selected)" },
  { label: "ELIGIBILITY", value: "2nd, 3rd & 4th year students, all departments" },
  { label: "EVENT TYPE", value: "Inter-College Event" },
];

export const EVENT_FOCUS = [
  "Innovation",
  "Teamwork",
  "Practical AI knowledge",
  "Problem solving",
  "Creativity",
  "Ethical AI",
  "Research-oriented thinking",
];

export const WHY_CARDS = [
  {
    title: "Build Real Solutions",
    body: "Transform real-world challenges into practical AI-powered solutions.",
    icon: "Hammer",
  },
  {
    title: "Think Beyond the Obvious",
    body: "Explore unconventional ideas and innovative approaches.",
    icon: "Lightbulb",
  },
  {
    title: "Work as a Team",
    body: "Collaborate, divide responsibilities and build something meaningful together.",
    icon: "Users",
  },
  {
    title: "Present to Experts",
    body: "Explain your idea, defend your approach and demonstrate your prototype.",
    icon: "Presentation",
  },
  {
    title: "Learn by Building",
    body: "Gain practical exposure to AI tools, technologies and development practices.",
    icon: "Cpu",
  },
  {
    title: "Get Recognized",
    body: "Outstanding teams will be recognized through prizes and certificates.",
    icon: "Award",
  },
] as const;

export const TIMELINE = [
  {
    date: "23 AUGUST 2026",
    title: "Online Round Begins",
    body: "The event information and Google Form containing the five predefined problem statements will be shared.",
    points: ["Teams choose one problem statement and prepare their PowerPoint presentation."],
  },
  {
    date: "7 SEPTEMBER 2026",
    title: "Submission Deadline",
    body: "Teams must submit their PowerPoint presentation using the official Intellect Hack 2026 template before the deadline.",
    points: [],
  },
  {
    date: "19 SEPTEMBER 2026",
    title: "Shortlisted Teams Announced",
    body: "Shortlisted teams will be announced and communication will be sent through email.",
    points: [],
  },
  {
    date: "23 SEPTEMBER 2026",
    title: "Offline Grand Finale",
    body: "Selected teams report at Apple Hall, Sri Sairam Engineering College. The offline competition takes place for 6 hours.",
    points: [],
  },
];

export const ONLINE_ROUND_POINTS = [
  "Five predefined problem statements are listed on this website and will also be shared inside the Google Form.",
  "Each team must select any ONE problem statement to work on.",
  "Prepare a PowerPoint presentation for the selected problem statement covering problem understanding, proposed solution, methodology, feasibility and expected outcomes.",
  "The presentation must strictly follow the official Intellect Hack 2026 PPT template provided on this website.",
  "Submit the completed presentation through the official Google Form before 7 September 2026.",
  "The jury panel will evaluate all submissions and shortlisted teams will be informed through email.",
];

/** Official PPT template for the online round. */
export const PPT_TEMPLATE_URL = "https://www.canva.com/design/DAHSDAi3oQ0/5tiAN9U_n6iNuEXQ_Sg33w/edit";

export const PROBLEM_STATEMENTS = [
  {
    no: "01",
    title: "Autonomous AI for Critical Infrastructure",
    description:
      "Build AI systems that can monitor, predict and protect critical infrastructure such as power grids, water networks, transport systems or industrial plants. Solutions may focus on predictive maintenance, fault detection, reliability analysis or autonomous decision support that keeps essential services running safely.",
  },
  {
    no: "02",
    title: "AI Against Misinformation & Digital Trust",
    description:
      "Design AI solutions that detect fake news, manipulated media, deepfakes or coordinated online manipulation. Solutions may focus on content verification, source credibility scoring, explainable detection or tools that help everyday users judge what is trustworthy online.",
  },
  {
    no: "03",
    title: "Human-AI Collaboration for Scientific Discovery",
    description:
      "Create AI tools that work alongside researchers to accelerate discovery — literature analysis, hypothesis generation, experiment design, simulation or data interpretation across fields like medicine, materials, biology or climate science.",
  },
  {
    no: "04",
    title: "AI for Space & Earth Intelligence",
    description:
      "Use AI on satellite imagery, remote sensing or space mission data to solve real problems: disaster response, crop and forest monitoring, urban growth, climate tracking, orbital debris analysis or autonomous spacecraft operations.",
  },
  {
    no: "05",
    title: "Open Innovation",
    description:
      "No fixed theme. Identify any real-world problem you care about and solve it with AI. Your idea will be judged on originality, clarity of the problem, technical depth, feasibility and the impact your solution can create.",
  },
];

export const EVALUATION_CRITERIA = [
  "Problem Understanding",
  "Innovation & Creativity",
  "Technical Approach",
  "Feasibility",
  "Prototype Functionality",
  "Technical Implementation",
  "Scalability & Impact",
  "Presentation & Demonstration",
];

export const PRIZES = [
  { place: "WINNER", amount: "₹1,500", rank: 1 },
  { place: "RUNNER-UP", amount: "₹1,000", rank: 2 },
  { place: "SECOND RUNNER-UP", amount: "₹750", rank: 3 },
];

export const ADVISOR = {
  title: "Advisor - IEEE Reliability Society",
  name: "Dr. A. Naresh Kumar",
  designation: "Head of the Department - Computer Science and Business Systems",
  college: "Sri Sairam Engineering College",
  address: "Chennai - 44",
};

export const STAFF_COORDINATOR = {
  name: "Mr. D. Prabhu",
  designation: "Assistant Professor – Computer Science and Business Systems",
  college: "Sri Sairam Engineering College",
  address: "Chennai – 44",
};

/** Phone numbers are placeholders until official numbers are provided. */
/**
 * Student coordinators.
 * `phone` is a placeholder until official numbers are provided.
 * `photo` accepts an imported image or a public path (e.g. "/images/name.jpg").
 * Leave it empty to show the monogram fallback.
 */
export type Coordinator = {
  name: string;
  year: string;
  department: string;
  phone: string;
  photo?: string;
};

export const STUDENT_COORDINATORS: Coordinator[] = [
  {
    name: "Thanishka Yogesh",
    year: "II Year",
    department: "CSE",
    phone: "+91 90256 58705",
    photo: "",
  },
  {
    name: "Surya S",
    year: "II Year",
    department: "CSBS",
    phone: "+91 73389 27172",
    photo: "",
  },
  {
    name: "Gokulkumar V",
    year: "II Year",
    department: "CSE",
    phone: "+91 80561 66638",
    photo: "",
  },
  {
    name: "Ramya S",
    year: "III Year",
    department: "ECE",
    phone: "+91 63796 01275",
    photo: "",
  },
  {
    name: "Shabir S",
    year: "II Year",
    department: "CSE",
    phone: "+91 73580 07571",
    photo: "",
  },
  {
    name: "Madhesh R",
    year: "IV Year",
    department: "CSBS",
    phone: "+91 91763 70183",
    photo: "",
  },
];


export const FAQS = [
  {
    q: "Who can participate?",
    a: "Students from 2nd, 3rd & 4th year, any departments. Intellect Hack 2026 is an inter-college competition.",
  },
  { q: "How many members can be in a team?", a: "Each team must have 2–4 members." },
  {
    q: "What is the registration fee?",
    a: "₹200 per team, payable only if your team is selected for the offline round.",
  },
  {
    q: "How do we submit for the first round?",
    a: "Choose one problem statement, prepare your presentation using the official Intellect Hack 2026 PPT template available on this website, and submit it through the official Google Form.",
  },
  {
    q: "Is there a fixed PPT template?",
    a: "Yes. Presentations must be made using the official template provided in the PPT Template section of this website. Submissions in any other format may not be evaluated.",
  },
  {
    q: "When will shortlisted teams be announced?",
    a: "Shortlisted teams will be announced on 19 September 2026 and informed through email.",
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Problem Statements", href: "#problems" },
  { label: "PPT Template", href: "#template" },
  { label: "Grand Finale", href: "#finale" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Coordinators", href: "#coordinators" },
  { label: "Register", href: "#register" },
];
