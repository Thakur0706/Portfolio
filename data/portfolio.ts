export const personal = {
  firstName: 'Soham',
  lastName: 'Thakur',
  name: 'Soham Sagar Thakur',
  title: 'Full‑Stack Developer | MERN | AI Enthusiast',
  bio: 'Full‑Stack Developer with 1+ year of experience building production‑grade MERN applications. Passionate about AI integration, clean code, and scalable architecture. Currently pursuing B.E. IT at VESIT, Mumbai.',
  social: {
    github: 'https://github.com/Thakur0706',
    linkedin: 'https://www.linkedin.com/in/soham-thakur-285a242b1',
    email: 'thakursoham131@gmail.com',
  },
}

export const skills = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'n8n'],
  Database: ['MongoDB', 'Mongoose', 'PostgreSQL'],
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  'AI & Automation': ['OpenRouter AI', 'LangChain', 'ChatGPT API'],
  Tools: ['Git', 'GitHub', 'Jira', 'Postman', 'Vercel'],
}

export const projects = [
  {
    id: 1,
    name: 'Draft — Blogging Platform',
    subtitle: 'AI‑Powered',
    description:
      'A modern blogging platform with AI writing assistant, real‑time features, and infinite scrolling.',
    longDescription:
      'Architected a full‑stack blogging platform featuring a Google Gemini AI writing assistant for draft generation. Built real‑time features with infinite scrolling powered by TanStack Query, and ImageKit CDN for media optimization. Integrated Clerk Auth with webhooks for MongoDB sync, rich‑text editing, category filtering, dynamic search, and a fully responsive mobile‑first UI.',
    tech: ['React', 'Node.js', 'MongoDB', 'Clerk', 'TanStack Query', 'Gemini AI', 'Tailwind CSS'],
    github: 'https://github.com/Thakur0706/blog-website',
    demo: 'https://draft.sohamthakur.dev',
    color: '#a78bfa',
  },
  {
    id: 2,
    name: 'E‑Certificate Generator',
    subtitle: 'Bulk + QR',
    description:
      'Generate thousands of certificates with QR verification and admin analytics dashboards.',
    longDescription:
      'Engineered a bulk certificate generation system using Node.js Canvas API, mapping Excel data onto drag‑and‑drop templates with ZIP bundling for thousands of certificates. Secured certificates with unique QR codes and Google OAuth 2.0/Passport.js authentication. Built Chart.js admin dashboards for real‑time generation analytics and certificate tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Canvas API', 'Google OAuth', 'Chart.js'],
    github: 'https://github.com/Thakur0706/cert-gen',
    demo: 'https://cert-gen-demo.vercel.app',
    color: '#34d399',
  },
  {
    id: 3,
    name: 'SmartResume — AI Assistant',
    subtitle: 'AI‑Powered',
    description:
      'Score and tailor resumes against job descriptions using AI-driven analysis.',
    longDescription:
      'Architected a full‑stack MERN app integrating OpenRouter AI to score resumes against job descriptions, delivering objective analysis with detailed breakdowns and actionable pros/cons feedback. Built secure JWT/bcrypt authentication, multer‑based PDF extraction, and a React dashboard for tracking historical analyses and AI‑generated resume iterations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenRouter AI', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Thakur0706/smart-resume-app',
    demo: 'https://smart-resume-app-three.vercel.app',
    color: '#f472b6',
  },
]

export const experiences = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'ZEMO',
    period: 'May 2025 – Jul 2025',
    type: 'Internship',
    bullets: [
      'Contributed to a Match Officials Booking System – designed role‑based planning, profile schema, and backend architecture.',
      'Built APIs for official registration, availability, and booking workflows to streamline organizer interactions.',
    ],
  },
  {
    id: 2,
    role: 'Full‑Stack Developer Intern',
    company: 'VESIT',
    period: 'Dec 2024 – Jun 2025',
    type: 'Internship',
    bullets: [
      'Built a dynamic certificate generation system using the MERN stack with on‑demand rendering.',
      'Collaborated with faculty to deploy a lightweight, scalable certificate issuance solution.',
    ],
  },
  {
    id: 3,
    role: 'Project Developer (Volunteer)',
    company: 'Vivekanand Seva Mandal',
    period: 'Feb 2025 – Apr 2025',
    type: 'Volunteer',
    bullets: [
      'Developed a MERN stack portal to streamline scholarship applications and document uploads.',
      'Supported NGO digital transformation initiatives as a volunteer developer.',
    ],
  },
]

export const education = [
  {
    id: 1,
    institution: 'Vivekanand Education Society\'s Institute of Technology (VESIT)',
    degree: 'B.E. Information Technology',
    period: '2023 – 2027',
    score: 'CGPA: 9.09 / 10',
  },
  {
    id: 2,
    institution: 'Keraleeya Samajam\'s Model College (Autonomous)',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2021 – 2023',
    score: 'Score: 80.81%',
  },
]

export const certifications = [
  {
    id: 1,
    name: 'The Web Developer Bootcamp',
    issuer: 'Colt Steele (Udemy)',
    date: '2024',
  },
]

export const achievements = [
  {
    id: 1,
    title: 'Runner‑Up at Hackathon Genesis (VESIT)',
    description: 'Developed an automated Jira ticketing agent using n8n for workflow automation.',
  },
  {
    id: 2,
    title: 'Finalist at Syrus Hackathon (VESIT)',
    description: 'Built an AI‑based issue‑solving engineering assistant for automated debugging and code fixes.',
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export const techStack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'Framer Motion',
  'Socket.io',
  'Git',
  'Vercel',
]
