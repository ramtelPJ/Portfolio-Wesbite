import type { PortfolioData } from "@/types/portfolio";

// Placeholders to verify before this goes live: rating/skill/radar/metric numbers
// (no such scores existed anywhere before), project years, and the two achievement
// entries (no real awards/certifications were provided — replace them).
export const portfolioData: PortfolioData = {
  personal: {
    name: "Prajwol Ramtel",
    role: "Full-Stack Developer",
    rating: 87,
    location: "Monroe, Louisiana",
    status: "Open to opportunities",
    image: "/images/profile/headshot.jpeg",
    initials: "PR",
    specialty: "Web Applications",
    yearsActive: "2020 — Present",
    bio: "I’m currently doing an IT internship and exploring my interest in app development and modern technology. I enjoy learning new things, building projects, and seeing where technology can take me. Outside of IT, I enjoy playing soccer, which is also a big inspiration behind the FIFA-themed style of my portfolio. I’m still learning, growing, and just going with the flow while figuring out where my journey in tech takes me."
,
    resumeUrl: "/resume.pdf",
  },

  stats: [
    { label: "COD", name: "Coding", value: 85 },
    { label: "DES", name: "Design", value: 78 },
    { label: "PRB", name: "Problem Solving", value: 92 },
    { label: "CRE", name: "Creativity", value: 82 },
    { label: "LDR", name: "Leadership", value: 80 },
    { label: "EXP", name: "Experience", value: 80 },
  ],

  radar: [
    { category: "Technical", value: 92 },
    { category: "Creativity", value: 80 },
    { category: "Problem Solving", value: 88 },
    { category: "Communication", value: 78 },
    { category: "Leadership", value: 80 },
    { category: "Adaptability", value: 95 },
  ],

  skills: [
    {
      id: "technical",
      title: "Technical",
      skills: [
        { name: "JavaScript", value: 90 },
        { name: "React", value: 85 },
        { name: "TypeScript", value: 80 },
        { name: "Next.js", value: 78 },
        { name: "Python", value: 82 },
        { name: "SQL", value: 80 },
      ],
    },
    {
      id: "creative",
      title: "Creative",
      skills: [
        { name: "UI Design", value: 76 },
        { name: "UX Thinking", value: 78 },
        { name: "Visual Design", value: 72 },
      ],
    },
    {
      id: "professional",
      title: "Professional",
      skills: [
        { name: "Leadership", value: 80 },
        { name: "Communication", value: 80 },
        { name: "Problem Solving", value: 88 },
        { name: "Team-Player", value: 84 },
      ],
    },
  ],

  education: [
    {
      id: "ulm",
      yearRange: "2023 — Present",
      institution: "University of Louisiana at Monroe (ULM)",
      degree: "Bachelor of Science",
      field: "Computer Science",
      achievements: [],
    },
    {
      id: "nist",
      yearRange: "2020 — 2022",
      institution: "National Institute of Science and Technology (NIST)",
      degree: "High School Diploma",
      field: "Computer Science",
      achievements: [],
    },
  ],

  projects: [
    {
      id: "job-pilot",
      name: "Job Pilot",
      type: "Web Application",
      category: "web",
      year: "2026",
      techStack: ["NextJS", "REST API","InsForge","BrowserBase"],
      rating: 90,
      description:
        "AI-powered job search platform designed to make job hunting easier and more efficient. It helps users discover relevant job opportunities, analyze company information, calculate job match scores, and track applications—all from one streamlined dashboard.",

      sourceUrl: "https://job-pilot-rust.vercel.app/",
      featured: true,
    },
    {
      id: "lalens",
      name: "LA-Lens",
      type: "Web App",
      category: "ai",
      year: "2026",
      techStack: ["React","Node.js","TailwindCSS","Firebase"],
      rating: 91,
      description:"Civic-tech prototype for the Nexus DevDays EdTech Challenge: a single place to explore where to invest in education pathways, what to build, and why—with transparent scoring, a parish map, dashboards, and an AI insight assistant."
        ,
      sourceUrl:"https://la-lens.vercel.app/",
    },
    {
      id: "myflix",
      name: "MyFlix",
      type: "Web Application",
      category: "web",
      year: "2024",
      techStack: ["React", "CSS"],
      rating: 90,
      description:
        "A React-based movie search app with real-time results, posters, and details pulled from an external API, wrapped in a clean, responsive UI.",
      sourceUrl: "https://github.com/ramtelPJ/Movie-App",
      featured: true,
    },
    {
      id: "chat-ai-agent",
      name: "Chat AI Agent",
      type: "Automation / AI",
      category: "ai",
      year: "2024",
      techStack: ["n8n", "OpenAI"],
      rating: 84,
      description:
        "An AI agent built with n8n and OpenAI that automates email and calendar workflows to save time on repetitive tasks.",
      sourceUrl: "https://github.com/ramtelPJ/n8n-AI_agent",
    },
    {
      id: "well-bite",
      name: "WellBite",
      type: "Web App",
      category: "web",
      year: "2023",
      techStack: ["Python/Django", "HTML", "TailwindCSS", "SQLite"],
      rating: 91,
      description:"WellBite is a smart, student-focused meal planning application designed for university dining. Whether you're vegan, gluten-free, bulking, or just trying to eat better — WellBite helps you generate personalized meal plans straight from your campus dining hall's menu. 🍽️🎯"
        ,
      sourceUrl: "https://github.com/Zeusangis/hackathon.git",
    },
    
  ],

  experience: [
    {
      id: "helpdesk-ts",
      yearRange: "2026 — Present",
      company: "Tech Savvy LLC",
      role: "IT Suppport Technician",
      description:
        "IT technician providing technical assistance for computers, printers, and networks across school, churches, clinics.",
      technologies: ["Linux", "Networking", "Active Directory","Software Infrastructure","Cloud Services"],
      achievements: [
        "Deliver tier-1 technical support to faculty and staff across 3+ school, church, and clinic client sites, resolving user account and access issues via Microsoft Azure and Entra ID (Azure AD), ensuring minimal downtime for daily operations.",

"Deploy and configure on-premises servers for school clients, including DNS and DHCP network configuration, establishing reliable network infrastructure and centralized resource management for the institution.",

"Diagnose and resolve hardware/software issues across a mixed fleet of Chromebooks, printers, and workstations, performing repairs and preventive maintenance to keep classroom and office technology running smoothly."
      ],
      metrics: [
        { label: "Ticket Resolution", value: 95 },
        { label: "Reliability", value: 92 },
        { label: "Communication", value: 90 },
      ],
    },
    {
      id: "helpdesk",
      yearRange: "2023 — Present",
      company: "University of Louisiana at Monroe",
      role: "IT Helpdesk",
      description:
        "IT Student Worker providing technical assistance for computers, printers, and networks across campus.",
      technologies: ["Windows", "Networking", "Active Directory"],
      achievements: [
        "Resolved issues related to computers, printers, and network accumulating 80+ hours of support to students and faculties across the main campus",

"Have been analyzing and solving the issues related to administrative functionality and setting up their network account to the domain maintaining user’s satisfaction rate at 95%",

"Solved over 100 technical support tickets related to university systems and networks through phone assistance, ensuring quick and effective resolutions for students and faculty."
      ],
      metrics: [
        { label: "Ticket Resolution", value: 1000 },
        { label: "Reliability", value: 92 },
        { label: "Communication", value: 95 },
      ],
    },
    {
      id: "passport-nepal",
      yearRange: "2020 — 2021",
      company: "Department of Passport Nepal",
      role: "Web Development Intern",
      description:
        "Managed and optimized a secure passport database with Node.js, handling 1,500+ monthly records.",
      technologies: ["Node.js", "SQL"],
      achievements: [
        "Reduced data entry errors by 20%",
        "Built a time appointment system that cut query response time by 15%",
      ],
      metrics: [
        { label: "Project Delivery", value: 88 },
        { label: "Teamwork", value: 85 },
        { label: "Impact", value: 87 },
      ],
    },
  ],

  achievements: [
    {
      id: "aws",
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2026",
      description:" Validated expertise in AI/ML concepts, AWS services, and practical application of AI solutions on the AWS platform."
        ,
      category: "certification",
      placeholder: true,
    },
    {
      id: "ech",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2025",
      description:" Demonstrated proficiency in ethical hacking techniques, penetration testing, and cybersecurity best practices."
        ,
      category: "certification",
      placeholder: true,
    },
    {
      id: "meta",
      title: "Programming with Javascript",
      issuer: "Meta",
      year: "2024",
      description:" Validated skills in JavaScript programming, including syntax, data structures, and problem-solving techniques."
        ,
      category: "certification",
      placeholder: true,
    },
    {
      id: "gdsc ",
      title: "External Vice President",
      issuer: "GDSC ULM",
      year: "2025-Present",
      description: "Serving as the External Vice President of Google Developer Student Club (GDSC) at the University of Louisiana at Monroe, leading initiatives to foster a vibrant developer community and promote technical learning opportunities.",
      category: "scholarship",
      placeholder: true,
    },
  ],

  // Grounded in the real project/skill/experience counts above — not invented.
  statistics: [
    { label: "Projects Completed", value: 10, suffix : "+" },
    { label: "Technologies", value: 11 },
    { label: "Years Coding", value: 4, suffix: "+" },
    { label: "Courses and Certification", value: 10, suffix: "+" },
  ],

  social: {
    email: "ramtelpj@gmail.com",
    linkedin: "https://www.linkedin.com/in/prajwol-ramtel-00a6a9283/",
    github: "https://github.com/ramtelPJ",
    leetcode: "https://leetcode.com/u/prajwol_ramtel/",
    resume: "/resume.pdf",
  },
};
