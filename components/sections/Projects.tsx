'use client'


// Temporary hardcoded data for testing - using actual data from constants
const TEST_PROJECTS = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    longDescription: "This comprehensive e-commerce platform showcases modern web development practices with a focus on user experience and performance. The project includes features like product catalog, shopping cart, secure checkout, order management, and administrative tools.",
    image: "/images/projects/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "NextAuth.js"],
    category: "web" as const,
    status: "completed" as const,
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
    category: "web" as const,
    status: "completed" as const,
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
    category: "web" as const,
    status: "completed" as const,
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
    category: "web" as const,
    status: "completed" as const,
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
    category: "mobile" as const,
    status: "in-progress" as const,
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
    category: "other" as const,
    status: "completed" as const,
    featured: false,
    githubUrl: "https://github.com/yourusername/api-microservice",
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2023-09-01")
  }
]

export default function Projects() {
  // Using test data temporarily to fix empty sections
  const PROJECTS_TO_USE = TEST_PROJECTS
  
  console.log('Using test projects data, count:', PROJECTS_TO_USE.length)

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-white mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Projects ({PROJECTS_TO_USE.length})</h2>
          <p className="text-gray-300 text-lg">
            A showcase of my recent work, from full-stack web applications to mobile apps.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_TO_USE.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-white border border-gray-700 hover:border-gray-600 transition-all">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="bg-blue-600 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-gray-600 text-xs px-2 py-1 rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Status and Actions */}
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    project.status === 'completed' ? 'bg-green-500' : 
                    project.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}></span>
                  {project.status.replace('-', ' ')}
                  {project.featured && <span className="ml-2 text-yellow-400">⭐ Featured</span>}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                       className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors">
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                       className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-xs transition-colors">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-2xl font-bold text-blue-400">{PROJECTS_TO_USE.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {PROJECTS_TO_USE.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-gray-400 text-sm">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {PROJECTS_TO_USE.filter(p => p.featured).length}
              </div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {Array.from(new Set(PROJECTS_TO_USE.flatMap(p => p.technologies))).length}
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}