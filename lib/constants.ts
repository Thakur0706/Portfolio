export const personal = {
  name: 'Soham Sagar Thakur',
  title: 'Full‑Stack Developer | MERN | AI Enthusiast',
  bio: 'Passionate Full‑Stack Developer with a strong foundation in the MERN stack, AI integration, and scalable web solutions. Currently pursuing B.E. in Information Technology at VESIT, with hands‑on experience in building real‑world applications for startups, educational institutions, and NGOs. Driven by curiosity and a commitment to clean code, I enjoy architecting efficient systems and solving complex problems.',
  email: 'thakursoham131@gmail.com',
  github: 'https://github.com/Thakur0706',
  linkedin: 'https://www.linkedin.com/in/soham-thakur-285a242b1',
  twitter: '',
  resumeUrl: '/resume.pdf', // place your PDF in public/
}

export const skills = {
  'Full‑Stack Development': ['MERN Stack', 'REST APIs', 'Postman'],
  'Programming Languages': ['Java', 'Python', 'JavaScript'],
  'Automation & Tools': ['n8n', 'Socket.io', 'Git', 'GitHub', 'Jira'],
}

export const experiences = [
  {
    title: 'Web Development Intern',
    company: 'ZEMO',
    period: 'May 2025 – July 2025',
    description: [
      'Contributed to a Match Officials Booking System – designed role‑based planning, profile schema, and backend architecture.',
      'Built APIs for official registration, availability, and booking workflows to streamline organizer interactions.',
    ],
  },
  {
    title: 'Full‑Stack Developer Intern',
    company: 'VESIT',
    period: 'Dec 2024 – June 2025',
    description: [
      'Built a dynamic certificate generation system using the MERN stack with on‑demand rendering.',
      'Collaborated with faculty to deploy a lightweight, scalable certificate issuance solution.',
    ],
  },
  {
    title: 'Project Developer (Volunteer)',
    company: 'Vivekanand Seva Mandal',
    period: 'Feb 2025 – Apr 2025',
    description: [
      'Developed a MERN stack portal to streamline scholarship applications and document uploads.',
      'Supported NGO digital transformation initiatives as a volunteer developer.',
    ],
  },
]

export const projects = [
  {
    title: 'Draft – Full‑Stack Blogging Platform',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Clerk', 'TanStack Query', 'TailwindCSS'],
    description: 'Architected a blogging platform with real‑time Direct Messaging (Socket.io) featuring typing indicators, unread badges, and online status. Infinite scrolling via TanStack Query and ImageKit CDN for media. Integrated Clerk Auth with webhooks for MongoDB sync; built rich‑text editing, dynamic search, trending filters, and a fully responsive mobile‑first UI.',
    live: 'https://draft-demo.vercel.app', // placeholder
    github: 'https://github.com/Thakur0706/draft',
  },
  {
    title: 'E‑Certificate Generation & Management Platform',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Canvas API', 'Google OAuth 2.0', 'Chart.js'],
    description: 'Engineered bulk certificate generation using Node.js Canvas API, mapping Excel data onto drag‑and‑drop templates with ZIP bundling for thousands of certificates. Secured certificates with unique QR codes and Google OAuth 2.0/Passport.js; built Chart.js admin dashboards for real‑time generation analytics.',
    live: 'https://cert-gen-demo.vercel.app',
    github: 'https://github.com/Thakur0706/cert-gen',
  },
  {
    title: 'SmartResume – AI‑Powered Resume Assistant',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenRouter AI', 'JWT', 'TailwindCSS'],
    description: 'Architected a full‑stack MERN app integrating OpenRouter AI to score resumes against job descriptions, delivering objective analysis, detailed breakdowns, and actionable pros/cons feedback. Built secure JWT/bcrypt authentication, multer‑based PDF extraction, and a React dashboard for tracking historical analyses and generated resume iterations.',
    live: 'https://smartresume-demo.vercel.app',
    github: 'https://github.com/Thakur0706/smartresume',
  },
]

export const education = [
  {
    institution: 'Vivekanand Education Society\'s Institute of Technology (VESIT)',
    degree: 'Bachelor of Engineering (B.E.), Information Technology',
    period: '2023 – 2027',
    score: 'CGPA: 9.09 / 10',
  },
  {
    institution: 'Keraleeya Samajam\'s Model College (Autonomous)',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2021 – 2023',
    score: 'Score: 80.81%',
  },
]

export const certifications = [
  {
    name: 'The Web Developer Bootcamp',
    issuer: 'Colt Steele (Udemy)',
    date: '2024',
  },
]

export const achievements = [
  {
    title: 'Runner‑Up at Hackathon Genesis (VESIT)',
    description: 'Developed an automated Jira ticketing agent using n8n for workflow automation.',
  },
  {
    title: 'Finalist at Syrus Hackathon (VESIT)',
    description: 'Built an AI‑based issue‑solving engineering assistant for automated debugging and code fixes.',
  },
]
