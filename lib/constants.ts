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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    longDescription: "This comprehensive e-commerce platform showcases modern web development practices with a focus on user experience and performance. The project includes features like product catalog, shopping cart, secure checkout, order management, and administrative tools.",
    image: "/images/projects/placeholder.svg",
    images: ["/images/projects/placeholder.svg", "/images/projects/placeholder.svg"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "NextAuth.js"],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2023-11-15")
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
    longDescription: "Built with React and Node.js, this application demonstrates real-time communication using Socket.io, state management with Redux, and responsive design principles.",
    image: "/images/projects/placeholder.svg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux", "Material-UI"],
    category: "web",
    status: "completed",
    featured: true,
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-demo.herokuapp.com",
    demoUrl: "https://www.youtube.com/watch?v=demo",
    createdAt: new Date("2023-06-01"),
    updatedAt: new Date("2023-08-30")
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing my projects and skills with dark theme and smooth animations.",
    longDescription: "This portfolio website features a modern design with dark theme, particle animations, smooth scrolling, and optimized performance. Built with Next.js 14 and modern web technologies.",
    image: "/images/projects/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "tsParticles"],
    category: "web",
    status: "completed",
    featured: false,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourname.dev",
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    longDescription: "Features include current weather conditions, 7-day forecasts, weather maps, and severe weather alerts. Integrates with multiple weather APIs for accurate data.",
    image: "/images/projects/placeholder.svg",
    technologies: ["React", "JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    category: "web",
    status: "completed",
    featured: false,
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-05-15")
  },
  {
    id: "mobile-expense-tracker",
    title: "Mobile Expense Tracker",
    description: "A React Native mobile application for tracking personal expenses with categorization and analytics.",
    longDescription: "Cross-platform mobile app with features like expense categorization, budget tracking, financial analytics, and data visualization. Includes offline capability and data synchronization.",
    image: "/images/projects/placeholder.svg",
    technologies: ["React Native", "Firebase", "Expo", "AsyncStorage", "React Navigation"],
    category: "mobile",
    status: "in-progress",
    featured: true,
    githubUrl: "https://github.com/yourusername/expense-tracker",
    createdAt: new Date("2023-10-01"),
    updatedAt: new Date("2024-01-01")
  },
  {
    id: "api-microservice",
    title: "RESTful API Microservice",
    description: "A scalable Node.js microservice with authentication, rate limiting, and comprehensive documentation.",
    longDescription: "Built following microservices architecture principles with proper error handling, logging, testing, and documentation. Includes JWT authentication, Redis caching, and API versioning.",
    image: "/images/projects/placeholder.svg",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Swagger"],
    category: "other",
    status: "completed",
    featured: false,
    githubUrl: "https://github.com/yourusername/api-microservice",
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2023-09-01")
  }
]

export const EXPERIENCE: Experience[] = [
  {
    id: "software-engineer-techcorp",
    company: "TechCorp Solutions",
    position: "Senior Software Engineer",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-12-01"),
    description: "Led development of scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions that improved user experience and business efficiency.",
    achievements: [
      "Developed and maintained 3 major web applications serving 10k+ users",
      "Reduced application load time by 40% through performance optimization",
      "Mentored 2 junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Led migration from legacy system to modern tech stack"
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
    type: "full-time",
    companyUrl: "https://techcorp.com"
  },
  {
    id: "frontend-developer-webstudio",
    company: "WebStudio Agency",
    position: "Frontend Developer",
    location: "Remote",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2022-12-01"),
    description: "Specialized in creating responsive and interactive user interfaces for client projects. Worked closely with designers and backend developers to deliver pixel-perfect implementations.",
    achievements: [
      "Successfully delivered 15+ client projects on time and within budget",
      "Improved website performance scores by average 35% across all projects",
      "Implemented responsive designs for multiple device breakpoints",
      "Collaborated with UX/UI team to enhance user experience",
      "Established coding standards and best practices for the team"
    ],
    technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Sass", "WordPress"],
    type: "full-time",
    companyUrl: "https://webstudio.com"
  },
  {
    id: "freelance-developer",
    company: "Freelance",
    position: "Full Stack Developer",
    location: "Remote",
    startDate: new Date("2020-03-01"),
    endDate: new Date("2021-05-01"),
    description: "Provided custom web development services to small and medium businesses. Handled complete project lifecycle from requirement gathering to deployment and maintenance.",
    achievements: [
      "Completed 25+ freelance projects with 100% client satisfaction",
      "Developed e-commerce solutions generating $50k+ in client revenue",
      "Created custom CMS solutions for content management",
      "Provided ongoing maintenance and support for client applications",
      "Built long-term relationships with repeat clients"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "WordPress"],
    type: "freelance"
  }
]

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