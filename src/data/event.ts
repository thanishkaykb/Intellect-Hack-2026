/**
 * ============================================================
 * INTELLECT HACK 2026 — SINGLE SOURCE OF CONFIGURATION
 * ------------------------------------------------------------
 * Edit the links and phone numbers below when official values
 * become available. Nothing else in the app hardcodes them.
 * ============================================================
 */

/** Official Google Form for the online preliminary round (PPT submission). */
export const GOOGLE_FORM_URL = ""; // TODO: add official Google Form URL

/** Official registration platform links. */
export const REGISTRATION_LINKS = {
  unstop: "", // TODO: add official Unstop URL
  devfolio: "", // TODO: add official Devfolio URL
};

/** Primary "Register Now" destination (falls back to the registration section). */
export const PRIMARY_REGISTER_URL = REGISTRATION_LINKS.unstop || "#register";

export const PHONE_PLACEHOLDER = "+91 XXXXX XXXXX";

export const EVENT = {
  name: "INTELLECT HACK 2026",
  tagline: "AI Hackathon | Competition",
  motto: "Innovate. Build. Demonstrate.",
  organizer: "IEEE Reliability Society • SEC SBC",
  date: "25 SEPTEMBER 2026",
  venue: "APPLE HALL",
  college: "SRI SAIRAM ENGINEERING COLLEGE, CHENNAI",
  duration: "6 Hours",
  teamSize: "2–4 Members per Team",
  fee: "₹200 per Team",
  eligibility: "Students from 2nd and 3rd year departments",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Problem Statements", href: "#problems" },
  { label: "How It Works", href: "#finale" },
  { label: "Evaluation", href: "#evaluation" },
  { label: "FAQ", href: "#faq" },
  { label: "Coordinators", href: "#coordinators" },
];

export const EVENT_FACTS = [
  { label: "EVENT TYPE", value: "Competition / AI Hackathon" },
  { label: "DURATION", value: "6 Hours" },
  { label: "DATE", value: "25 September 2026" },
  { label: "VENUE", value: "Apple Hall" },
  { label: "TEAM SIZE", value: "2–4 Members per Team" },
  { label: "REGISTRATION FEE", value: "₹200 per Team" },
  { label: "ELIGIBILITY", value: "Students from 2nd and 3rd year departments" },
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
    date: "11 SEPTEMBER 2026",
    title: "Online Round Begins",
    body: "The event information and Google Form containing the five predefined problem statements will be shared.",
    points: ["Teams choose one problem statement and prepare their PowerPoint presentation."],
  },
  {
    date: "19 SEPTEMBER 2026",
    title: "Submission Deadline",
    body: "Teams must submit their PowerPoint presentation before the deadline. The presentation should describe:",
    points: [
      "Problem understanding",
      "Proposed solution",
      "Methodology",
      "Feasibility",
      "Expected outcomes",
    ],
  },
  {
    date: "23 SEPTEMBER 2026",
    title: "Shortlisted Teams Announced",
    body: "Shortlisted teams will be announced and communication will be sent through email.",
    points: [],
  },
  {
    date: "25 SEPTEMBER 2026",
    title: "Offline Grand Finale",
    body: "Selected teams report at Apple Hall, Sri Sairam Engineering College. The offline competition takes place for 6 hours.",
    points: [],
  },
];

export const ONLINE_ROUND_POINTS = [
  "Participants may choose any ONE of the five predefined problem statements.",
  "The problem statements will be provided through a Google Form.",
  "Each team must submit a PowerPoint presentation explaining their proposed solution.",
  "The jury panel will evaluate the submissions based on the specified evaluation criteria.",
];

export const SUBMISSION_STEPS = [
  "Select one problem statement.",
  "Understand the problem clearly.",
  "Propose an AI-based solution.",
  "Explain the methodology.",
  "Explain feasibility.",
  "Describe expected outcomes.",
  "Submit the PowerPoint presentation before the deadline.",
];

export const PROBLEM_STATEMENTS = [
  { no: "01", title: "Autonomous AI for Critical Infrastructure" },
  { no: "02", title: "AI Against Misinformation & Digital Trust" },
  { no: "03", title: "Human-AI Collaboration for Scientific Discovery" },
  { no: "04", title: "AI for Space & Earth Intelligence" },
  { no: "05", title: "Open Innovation" },
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

export const OBJECTIVES = [
  { text: "Encourage students to develop innovative AI solutions.", icon: "Sparkles" },
  { text: "Promote teamwork and collaborative learning.", icon: "Users" },
  { text: "Enhance practical knowledge in Artificial Intelligence.", icon: "BrainCircuit" },
  { text: "Solve real-world challenges through technology.", icon: "Globe2" },
  {
    text: "Foster creativity, ethical AI practices and research-oriented thinking.",
    icon: "ShieldCheck",
  },
] as const;

export const OUTCOMES = [
  "Development of innovative AI-based prototypes",
  "Improved technical and analytical skills",
  "Better teamwork and communication abilities",
  "Exposure to real-world AI applications",
  "Encouragement towards research, innovation and entrepreneurship",
  "Improved problem-solving and presentation skills",
  "Exposure to industry-relevant AI tools and technologies",
  "Encouragement of creativity, innovation and ethical AI development",
  "Interdisciplinary collaboration and research-oriented thinking",
];

export const PRIZES = [
  { place: "WINNER", amount: "₹1,500", rank: 1 },
  { place: "RUNNER-UP", amount: "₹1,000", rank: 2 },
  { place: "SECOND RUNNER-UP", amount: "₹750", rank: 3 },
];

export const VALEDICTORY = [
  "Announcement of Winners",
  "Prize Distribution",
  "Certificate Distribution",
  "Vote of Thanks",
];

export const JURY = ["IEEE SCOPE Members", "Faculty Members from Multiple Departments"];

export const STAFF_COORDINATOR = {
  name: "Mr. D. Prabhu",
  designation: "Assistant Professor – Computer Science and Business Systems",
  college: "Sri Sairam Engineering College",
  address: "Chennai – 44",
};

/** Phone numbers are placeholders until official numbers are provided. */
export const STUDENT_COORDINATORS = [
  {
    name: "Thanishka Yogesh",
    year: "II CSE",
    roles: ["Design", "MC & Song", "Volunteer Management"],
    phone: PHONE_PLACEHOLDER,
  },
  { name: "Surya", year: "II CSBS", roles: ["Event Management"], phone: PHONE_PLACEHOLDER },
  { name: "Gokulkumar V", year: "II CSE", roles: ["Technical Team"], phone: PHONE_PLACEHOLDER },
  { name: "Shabir S", year: "II CSE", roles: ["Technical Team"], phone: PHONE_PLACEHOLDER },
  { name: "Ramya S", year: "III ECE", roles: ["Design"], phone: PHONE_PLACEHOLDER },
  { name: "Madhesh R", year: "IV CSBS", roles: ["Event Management"], phone: PHONE_PLACEHOLDER },
];

export const TEAM_ASSIGNMENTS = [
  { role: "Event Management", members: "Surya, Madhesh" },
  { role: "Design", members: "Ramya, Thanishka Yogesh" },
  { role: "Technical Team", members: "Shabir, Gokulkumar" },
  { role: "Food & Guest Management", members: "Ramani" },
  { role: "MC & Song", members: "Thanishka Yogesh, Bhavana" },
  { role: "Volunteer Management", members: "Thanishka Yogesh" },
  { role: "Registration Desk", members: "Sahithya" },
];

export const FAQS = [
  {
    q: "Who can participate?",
    a: "Students from 2nd and 3rd year departments can participate. The event is an inter-college competition.",
  },
  { q: "How many members can be in a team?", a: "Each team must have 2–4 members." },
  { q: "What is the registration fee?", a: "The registration fee is ₹200 per team." },
  {
    q: "Is there an online preliminary round?",
    a: "Yes. The online preliminary round begins on 11 September 2026.",
  },
  {
    q: "What do we submit in the online round?",
    a: "Teams must submit a PowerPoint presentation explaining their problem understanding, proposed solution, methodology, feasibility and expected outcomes.",
  },
  {
    q: "Where will the online problem statements be provided?",
    a: "The five predefined problem statements will be circulated through a Google Form.",
  },
  {
    q: "Can we choose any problem statement?",
    a: "Yes. Each team may choose any ONE of the five predefined problem statements.",
  },
  {
    q: "When is the submission deadline?",
    a: "The PowerPoint submission deadline is 19 September 2026.",
  },
  {
    q: "When will shortlisted teams be announced?",
    a: "Shortlisted teams will be announced before or on 23 September 2026, with communication sent through email.",
  },
  { q: "When is the offline round?", a: "The offline grand finale takes place on 25 September 2026." },
  {
    q: "Where is the offline event?",
    a: "The offline event will be conducted at Apple Hall, Sri Sairam Engineering College, Chennai.",
  },
  {
    q: "Will the offline problem statement be given beforehand?",
    a: "No. A new problem statement will be announced on the spot at the venue.",
  },
  { q: "How long is the offline event?", a: "The offline event duration is 6 hours." },
  {
    q: "What happens during the offline round?",
    a: "The first half focuses on understanding the problem, preparing a solution concept and presenting it. The second half focuses on developing/refining the prototype and presenting a working demonstration followed by a Q&A session.",
  },
  {
    q: "How will the winners be selected?",
    a: "Winners will be selected based on the overall evaluation of the PowerPoint presentation and prototype demonstration.",
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Problem Statements", href: "#problems" },
  { label: "Evaluation", href: "#evaluation" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];
