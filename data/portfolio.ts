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
    bio: "Full-stack developer and Computer Science student at the University of Louisiana at Monroe. I build clean, responsive web applications end to end — from React interfaces to the backend systems and databases behind them — and I care as much about reliability and craft as I do about shipping.",
    resumeUrl: "/resume.pdf",
  },

  stats: [
    { label: "COD", name: "Coding", value: 92 },
    { label: "DES", name: "Design", value: 78 },
    { label: "PRB", name: "Problem Solving", value: 88 },
    { label: "CRE", name: "Creativity", value: 82 },
    { label: "LDR", name: "Leadership", value: 75 },
    { label: "EXP", name: "Experience", value: 80 },
  ],

  radar: [
    { category: "Technical", value: 92 },
    { category: "Creativity", value: 80 },
    { category: "Problem Solving", value: 88 },
    { category: "Communication", value: 78 },
    { category: "Leadership", value: 75 },
    { category: "Adaptability", value: 85 },
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
        { name: "Leadership", value: 75 },
        { name: "Communication", value: 80 },
        { name: "Problem Solving", value: 88 },
        { name: "Collaboration", value: 84 },
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
      degree: "Bachelor of Science",
      field: "Computer Science",
      achievements: [],
    },
  ],

  projects: [
    {
      id: "myflix",
      name: "MyFlix",
      type: "Web Application",
      category: "web",
      year: "2024",
      techStack: ["React", "REST API"],
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
      id: "dice-game",
      name: "Dice Game",
      type: "Web App",
      category: "web",
      year: "2023",
      techStack: ["JavaScript", "HTML", "CSS"],
      rating: 72,
      description:
        "A browser-based dice game where players take turns rolling to accumulate points — first to the winning score takes it.",
      sourceUrl: "https://github.com/ramtelPJ/Dice-Game",
    },
    {
      id: "forkify",
      name: "Forkify App",
      type: "Web App",
      category: "web",
      year: "2025",
      techStack: ["JavaScript"],
      rating: 60,
      description: "A recipe search app, currently in progress.",
      sourceUrl: "https://github.com/your-github-repo",
      wip: true,
    },
  ],

  experience: [
    {
      id: "helpdesk",
      yearRange: "2023 — Present",
      company: "University of Louisiana at Monroe",
      role: "IT Helpdesk",
      description:
        "IT Support Technician providing technical assistance for computers, printers, and networks across campus.",
      technologies: ["Windows", "Networking", "Active Directory"],
      achievements: [
        "Delivered 80+ hours of hands-on support",
        "Resolved 100+ technical tickets",
        "Maintained a 95% user satisfaction rate",
      ],
      metrics: [
        { label: "Ticket Resolution", value: 95 },
        { label: "Reliability", value: 92 },
        { label: "Communication", value: 90 },
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
      id: "placeholder-1",
      title: "Add Your Achievement",
      issuer: "Replace with a real award, certification, or competition",
      year: "2024",
      description:
        "Swap this card out for something real — a certification, scholarship, hackathon placement, or academic honor.",
      category: "award",
      placeholder: true,
    },
    {
      id: "placeholder-2",
      title: "Add Another Highlight",
      issuer: "Replace with a real credential",
      year: "2023",
      description: "A second slot for another achievement worth showing off.",
      category: "certification",
      placeholder: true,
    },
  ],

  // Grounded in the real project/skill/experience counts above — not invented.
  statistics: [
    { label: "Projects Completed", value: 4 },
    { label: "Technologies", value: 11 },
    { label: "Years Coding", value: 4, suffix: "+" },
    { label: "GitHub Repositories", value: 4, suffix: "+" },
  ],

  social: {
    email: "ramtelpj@gmail.com",
    linkedin: "https://www.linkedin.com/in/prajwol-ramtel-00a6a9283/",
    github: "https://github.com/ramtelPJ",
    leetcode: "https://leetcode.com/u/prajwol_ramtel/",
    resume: "/resume.pdf",
  },
};
