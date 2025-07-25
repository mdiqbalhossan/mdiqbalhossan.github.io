import { Skill, SocialLink, Project, Education, Experience } from '@/types'

export const PERSONAL_INFO = {
  name: "Iqbal Hossen",
  title: "Software Engineer",
  email: "jmiqbal2019@gmail.com",
  location: "Dhaka, Bangladesh",
  bio: "Passionate Software Engineer with expertise in modern web technologies. I love creating innovative digital solutions that solve real-world problems with clean, efficient code.",
  mission: "To build exceptional digital experiences that make a positive impact on users' lives while continuously learning and growing in the ever-evolving world of technology.",
  avatar: "/images/profile.png",
  resume: "/resume.pdf"
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/mdiqbalhossan",
    username: "mdiqbalhossan",
    icon: "Github",
    color: "#333"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/md-iqbal-hossen-fazlay-rabbi",
    username: "md-iqbal-hossen-fazlay-rabbi",
    icon: "Linkedin",
    color: "#0077B5"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/@engiqbalhossan",
    username: "iqbalhossen",
    icon: "Twitter",
    color: "#1DA1F2"
  },
  {
    platform: "Email",
    url: "mailto:jmiqbal2019@gmail.com",
    username: "jmiqbal2019@gmail.com",
    icon: "Mail",
    color: "#D44638"
  }
]

export const PROJECTS: Project[] = [
  {
    id: "iproduction-software",
    title: "iProduction - Production & Manufacture Management Software",
    description: "Comprehensive manufacturing and production management system with inventory, purchase, sales, and quotation modules.",
    longDescription: "Worked on most core features including raw material management, product manufacturing, inventory tracking, purchase orders, and real-time reporting. Contributed to both frontend and backend architecture, improving efficiency and scalability.",
    image: "/images/projects/iproduction.png",
    images: ["/images/projects/iproduction.png"],
    technologies: ["Laravel", "MySQL", "jQuery", "Bootstrap", "AJAX"],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "",
    liveUrl: "https://iproduction.doorsoft-demo.com/",
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-06-01")
  },
  {
    id: "quick-rabbit-support",
    title: "Quick Rabbit - AI Powered Support Ticketing",
    description: "AI-powered helpdesk and support ticketing system with knowledge base and live chat.",
    longDescription: "Contributed heavily to the frontend design and user experience of the support ticketing system. Worked with Vue.js, API integrations, and dashboard interfaces to build responsive and intuitive UI components.",
    image: "/images/projects/quick-rabbit.png",
    technologies: ["Laravel", "MySQL", "jQuery", "Bootstrap", "AJAX", "Push Notification", "Firebase"],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "",
    liveUrl: "https://quick-rabbit.doorsoft-demo.com/",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-05-15")
  },
  {
    id: "spescho-special-education",
    title: "Spescho - Special School IEP & Therapy Software",
    description: "School and therapy management system tailored for special education institutions.",
    longDescription: "Partially contributed to the development of student IEP plans, therapy scheduling, and user role management. Focused on modular design and form validation techniques.",
    image: "/images/projects/spescho.png",
    technologies: ["Laravel", "Jquery", "Ajax", "Bootstrap", "MySQL"],
    category: "web",
    status: "completed",
    featured: false,
    githubUrl: "",
    liveUrl: "https://codecanyon.net/item/spescho-special-school-iep-and-therapy-software/50936367",
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-02-15")
  },
  {
    id: "digibank-digital-banking",
    title: "DigiBank - Advanced Digital Banking System",
    description: "Modern digital banking system with rewards, transactions, accounts, and payment features.",
    longDescription: "Contributed partially to module integration and backend development for transaction flows and reward mechanisms.",
    image: "/images/projects/digibank.png",
    technologies: ["Laravel", "Jquery", "Ajax", "Bootstrap", "MySQL"],
    category: "web",
    status: "completed",
    featured: false,
    githubUrl: "",
    liveUrl: "https://digibank.tdevs.co",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-03-01")
  },
  {
    id: "selfdine-ai",
    title: "SelfDine AI - Restaurant Automation",
    description: "AI-based restaurant automation system for orders, kitchen display, and analytics.",
    longDescription: "Currently working on this modern AI-integrated system focusing on seamless restaurant operations, smart suggestions, and predictive analytics.",
    image: "/images/projects/placeholder.svg",
    technologies: ["Vue JS", "Laravel", "Tailwind CSS", "Vuetify", "REST API", "AI Integration", "Machine Learning"],
    category: "web",
    status: "in-progress",
    featured: true,
    githubUrl: "",
    liveUrl: "",
    createdAt: new Date("2024-07-01"),
    updatedAt: new Date("2024-07-21")
  },
  {
    id: "nova-nurse",
    title: "Nova Nurse Prep Course - Intelligent Medical Examination System",
    description: "AI-powered medical examination platform for automated diagnostics, patient assessment, and clinical decision support.",
    longDescription: "Developing a cutting-edge AI-based system that uses machine learning algorithms to assist with preliminary diagnoses, analyze medical images, and provide evidence-based recommendations to healthcare professionals. Features include symptom analysis, medical imaging interpretation, and personalized patient health insights.",
    image: "/images/projects/nova-nurse.png",
    technologies: ["Vue JS", "Laravel", "Tailwind CSS", "Vuetify", "REST API", "AI Integration", "Machine Learning"],
    category: "web",
    status: "in-progress",
    featured: false,
    githubUrl: "",
    liveUrl: "",
    createdAt: new Date("2024-06-15"),
    updatedAt: new Date("2024-07-21")
  },
  {
    id: "pharmacy-pos",
    title: "Pharmacy POS System",
    description: "Point of sale system for pharmacies with medicine inventory, barcode, and sales features.",
    longDescription: "Developed inventory management, billing, and barcode scanning modules for a custom POS system tailored for pharmaceutical environments.",
    image: "/images/projects/pharmacy-pos.png",
    technologies: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    category: "web",
    status: "completed",
    featured: false,
    githubUrl: "",
    liveUrl: "", // no live link
    createdAt: new Date("2023-08-01"),
    updatedAt: new Date("2023-10-01")
  }
];


export const EXPERIENCE: Experience[] = [
  {
    id: "software-engineer-doorsoft",
    company: "DOOR SOFT",
    position: "Software Engineer",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2024-02-01"),
    description: "Developed and maintained Manufacturing Software, School Management Software, and Support Portal Software, including SaaS-based systems.",
    achievements: [
      "Collaborated with development and testing teams to deliver high-performance client solutions",
      "Analyzed customer requirements and implemented efficient technical solutions",
      "Managed time effectively and consistently met deadlines",
      "Wrote clean and maintainable code for long-term stability"
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "REST API", "Git"],
    type: "full-time",
    companyUrl: ""
  },
  {
    id: "laravel-developer-tdevs",
    company: "TDEVS",
    position: "Laravel Developer",
    location: "Remote",
    startDate: new Date("2023-12-01"),
    endDate: new Date("2024-01-31"),
    description: "Contributed to Banking Management Software with features like payment method integration and credit card processing.",
    achievements: [
      "Integrated recharge-related APIs and payment gateways",
      "Updated legacy code to meet modern standards",
      "Participated in code reviews to uphold code quality"
    ],
    technologies: ["Laravel", "PHP", "REST API", "MySQL"],
    type: "full-time",
    companyUrl: ""
  },
  {
    id: "web-developer-aso",
    company: "ASO",
    position: "Web Developer",
    location: "Remote",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-01-31"),
    description: "Built and maintained client websites with custom web applications, ensuring responsive design and enhanced performance.",
    achievements: [
      "Coded websites using HTML, CSS, JavaScript, and jQuery",
      "Implemented responsive design for improved UX",
      "Converted mockups into interactive web solutions",
      "Used AJAX and JSON for dynamic frontend interaction"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "JSON"],
    type: "part-time",
    companyUrl: ""
  },
  {
    id: "php-laravel-developer-islamiyatech",
    company: "ISLAMIYA TECH",
    position: "PHP Laravel Developer",
    location: "Remote",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-09-30"),
    description: "Worked with cross-functional teams to implement new features and maintain code quality in a dynamic development environment.",
    achievements: [
      "Enhanced team productivity by quickly adapting to new technologies",
      "Fixed complex bugs ensuring a stable release",
      "Collaborated with teams for seamless feature integration"
    ],
    technologies: ["Laravel", "PHP", "MySQL"],
    type: "contract",
    companyUrl: ""
  },
  {
    id: "backend-developer-rbftechzone",
    company: "RBF TECH ZONE",
    position: "Backend Developer",
    location: "Remote",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-04-30"),
    description: "Focused on backend efficiency, including API development and third-party integrations.",
    achievements: [
      "Developed RESTful APIs for distributed systems",
      "Integrated third-party APIs into web platforms",
      "Managed efficient SQL queries and data processing"
    ],
    technologies: ["PHP", "REST API", "SQL", "Laravel"],
    type: "part-time",
    companyUrl: ""
  }
];


export const EDUCATION: Education[] = [
  {
    id: "bachelor-cs",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2024-06-01"),
    grade: "3.8 GPA",
    description: "Focused on software engineering, data structures, algorithms, and web development. Completed multiple projects in various programming languages and frameworks.",
    achievements: [
      "Dean's List for 6 semesters",
      "President of Computer Science Club",
      "Won 1st place in University Hackathon 2023",
      "Published research paper on web optimization"
    ],
    image: "/images/education/placeholder.svg"
  },
]

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "React JS",
    level: 65,
    category: "frontend",
    icon: "⚛️",
    description: "Building dynamic user interfaces with React hooks and modern patterns",
    yearsOfExperience: 1
  },
  {
    name: "Vue JS",
    level: 80,
    category: "frontend",
    icon: "💚",
    description: "Progressive JavaScript framework for building user interfaces",
    yearsOfExperience: 2
  },
  {
    name: "Tailwind CSS",
    level: 70,
    category: "frontend",
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    yearsOfExperience: 2
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
    icon: "🟨",
    description: "Modern ES6+ JavaScript for dynamic web applications",
    yearsOfExperience: 3
  },
  {
    name: "HTML5",
    level: 90,
    category: "frontend",
    icon: "🌐",
    description: "Semantic HTML markup and web standards",
    yearsOfExperience: 5
  },
  {
    name: "CSS3",
    level: 90,
    category: "frontend",
    icon: "🎭",
    description: "Modern CSS with animations, grid, and flexbox",
    yearsOfExperience: 5
  },

  // Backend
  {
    name: "PHP",
    level: 95,
    category: "backend",
    icon: "🐘",
    description: "Building robust server-side applications with modern PHP practices",
    yearsOfExperience: 3
  },
  {
    name: "Laravel",
    level: 95,
    category: "backend",
    icon: "🔷",
    description: "PHP framework for elegant web applications with MVC architecture",
    yearsOfExperience: 3
  },
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: "⚡",
    description: "Event-driven JavaScript runtime for building scalable network applications",
    yearsOfExperience: 1
  },
  {
    name: "Express.js",
    level: 75,
    category: "backend",
    icon: "🛤️",
    description: "Minimalist web framework for building APIs and web applications in Node.js",
    yearsOfExperience: 1
  },
  {
    name: "GraphQL",
    level: 70,
    category: "backend",
    icon: "🔗",
    description: "Query language for APIs, enabling flexible data retrieval",
    yearsOfExperience: 1
  },
  {
    name: "REST APIs",
    level: 85,
    category: "backend",
    icon: "🔄",
    description: "Designing and implementing RESTful services with proper resource modeling",
    yearsOfExperience: 3
  },

  // Database  
  {
    name: "MySQL",
    level: 85,
    category: "database",
    icon: "🗄️",
    description: "Popular relational database management system",
    yearsOfExperience: 3
  },
  {
    name: "MongoDB",
    level: 65,
    category: "database",
    icon: "🍃",
    description: "NoSQL database for modern applications",
    yearsOfExperience: 1
  },
  {
    name: "PostgreSQL",
    level: 60,
    category: "database",
    icon: "🐘",
    description: "Advanced open-source relational database",
    yearsOfExperience: 1
  },
  {
    name: "Firebase",
    level: 65,
    category: "database",
    icon: "🔥",
    description: "Google's platform for mobile and web application development",
    yearsOfExperience: 1
  },

  // Tools
  {
    name: "Git",
    level: 85,
    category: "tools",
    icon: "📊",
    description: "Version control system for tracking code changes",
    yearsOfExperience: 4
  },
  {
    name: "Docker",
    level: 55,
    category: "tools",
    icon: "🐳",
    description: "Containerization platform for application deployment",
    yearsOfExperience: 1
  },
  {
    name: "AWS",
    level: 55,
    category: "tools",
    icon: "☁️",
    description: "Amazon Web Services cloud computing platform",
    yearsOfExperience: 1
  },
  {
    name: "Vercel",
    level: 80,
    category: "tools",
    icon: "▲",
    description: "Frontend cloud platform for static sites and serverless functions",
    yearsOfExperience: 2
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: "💻",
    description: "Primary code editor with extensive customization",
    yearsOfExperience: 4
  },

  // Design
  {
    name: "Figma",
    level: 60,
    category: "design",
    icon: "🎨",
    description: "Collaborative interface design tool",
    yearsOfExperience: 2
  },
  {
    name: "Mockflow",
    level: 65,
    category: "design",
    icon: "🗂️",
    description: "Wireframing tool for creating UI mockups",
    yearsOfExperience: 1
  }
]

export const SKILL_CATEGORIES = {  
  backend: "Backend", 
  frontend: "Frontend",
  database: "Database",
  tools: "Tools & Platforms",
  design: "Design",
  other: "Other"
}

export const CODE_SNIPPETS = [
  {
    title: "Clean Code",
    language: "php",
    code: `const developer = {
  name: "Md Iqbal Hossen",
  skills: ["PHP", "Laravel", "Vue JS"],
  passion: "Building Dynamic Solutions",
  coffee: "☕".repeat(5)
}`,
    badges: ["Clean Code", "Best Practices"]
  },
  {
    title: "Innovation",
    language: "typescript",
    code: `interface Developer {
  creativity: number;
  problemSolving: 'expert';
  learning: 'continuous';
}

const me: Developer = {
  creativity: 100,
  problemSolving: 'expert',
  learning: 'continuous'
}`,
    badges: ["Innovation", "Problem Solving"]
  }
]

export const ABOUT_STATS = [
  { label: "Projects Completed", value: "10+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Coffee Cups", value: "∞" }
]

export const PROJECT_CATEGORIES = {
  all: "All Projects",
  web: "Web Applications",
  mobile: "Mobile Apps",
  desktop: "Desktop Applications",
  design: "UI/UX Design",
  other: "Other"
}

export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: "+8801679487265",
  location: PERSONAL_INFO.location,
  availability: "Available for freelance and full-time opportunities",
  responseTime: "Usually responds within 24 hours"
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#hero', icon: 'Home' },
  { name: 'About', href: '#about', icon: 'User' },
  { name: 'Skills', href: '#skills', icon: 'Code' },
  { name: 'Projects', href: '#projects', icon: 'Briefcase' },
  { name: 'Experience', href: '#experience', icon: 'Building' },
  { name: 'Education', href: '#education', icon: 'GraduationCap' },
  { name: 'Resume', href: '#resume', icon: 'FileText' },
  { name: 'Contact', href: '#contact', icon: 'Mail' },
] 