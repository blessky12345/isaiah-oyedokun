import ecommerce from "@/assets/proj-ecommerce.jpg";
import school from "@/assets/proj-school.jpg";
import voting from "@/assets/proj-voting.jpg";
import banking from "@/assets/proj-banking.jpg";
import chat from "@/assets/proj-chat.jpg";
import business from "@/assets/proj-business.jpg";

/** Edit these values to update the portfolio content. */
export const profile = {
  name: "Isaiah Oyedokun A.",
  title: "Full-Stack Web Developer",
  location: "Nigeria",
  // Replace these placeholders with real details.
  email: "oisaiahayodeji@gmail.com",
  phone: "+234 913 550 0745",
  github: "https://github.com/blessky12345",
  linkedin: "https://linkedin.com/in/isaiah-oyedokun-39590a284",
  facebook: "https://facebook.com/share/1Dib9pVnrx/",
  x: "https://x.com/OyedokunIsaiahA",
  cv: "/cv/Oyedokun-Isaiah-CV.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    group: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  { group: "Backend Development", items: ["Node.js", "PHP", "Laravel", "C#"] },
  {
    group: "Other Technologies",
    items: [
      "REST APIs",
      "Database Integration",
      "Git / GitHub",
      "Responsive Web Design",
      "UI/UX Implementation",
    ],
  },
];

export const techStack = [
  { name: "HTML5", short: "H5" },
  { name: "CSS3", short: "C3" },
  { name: "JavaScript", short: "JS" },
  { name: "Tailwind CSS", short: "TW" },
  { name: "Bootstrap", short: "BS" },
  { name: "React", short: "Re" },
  { name: "Vue", short: "Vu" },
  { name: "Next.js", short: "Nx" },
  { name: "Node.js", short: "No" },
  { name: "PHP", short: "PH" },
  { name: "Laravel", short: "La" },
  { name: "C#", short: "C#" },
];

export const projects = [
  {
    name: "E-Commerce Website",
    image: ecommerce,
    description:
      "Online store concept with product listings, cart flow, checkout screens and an admin view for managing inventory.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "REST API"],
    github: "https://github.com/blessky12345",
    demo: "#",
  },
  {
    name: "School Management Portal",
    image: school,
    description:
      "Portal for students, results and class records with role-based dashboards and reporting views.",
    tech: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/blessky12345",
    demo: "#",
  },
  {
    name: "Voting / Election Platform",
    image: voting,
    description:
      "Secure voting interface with candidate ballots, one-vote validation and live result visualisation.",
    tech: ["React.js", "Node.js", "REST API"],
    github: "https://github.com/blessky12345",
    demo: "#",
  },
  {
    name: "Banking Application",
    image: banking,
    description:
      "Banking app concept covering balances, transfers, transaction history and authentication flows.",
    tech: ["C#", "REST API", "SQL"],
    github: "https://github.com/blessky12345",
    demo: "#",
  },
  {
    name: "Chat Application",
    image: chat,
    description:
      "Messaging experience with conversation threads, message states and a responsive chat layout.",
    tech: ["Vue.js", "Node.js", "WebSockets"],
    github: "https://github.com/blessky12345",
    demo: "#",
  },
  {
    name: "Business / Company Website",
    image: business,
    description:
      "Corporate website with service pages, contact handling and a clean, conversion-focused layout.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/blessky12345",
    demo: "#",
  },
];

export const journey = [
  {
    title: "Learning Web Development",
    text: "Started with HTML, CSS and JavaScript fundamentals, building small pages and learning how the web actually works.",
  },
  {
    title: "Frontend Development",
    text: "Moved into component-driven interfaces with React, Vue and Next.js, plus Tailwind CSS and Bootstrap for layout and styling.",
  },
  {
    title: "Backend Development",
    text: "Picked up Node.js, PHP, Laravel and C# to handle server-side logic, REST APIs, databases and authentication.",
  },
  {
    title: "Full-Stack Development",
    text: "Started connecting both sides — building complete web applications from database to interface.",
  },
  {
    title: "Exploring App Development",
    text: "Experimenting with application development and carrying web patterns into app-style projects.",
  },
  {
    title: "Exploring Game Development",
    text: "Learning the basics of game development and building small experiments to understand game logic and mechanics.",
  },
  {
    title: "Continuous Learning",
    text: "Still exploring new tools, techniques and better ways to write clean, maintainable code.",
  },
];
