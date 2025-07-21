'use client'


import { PROJECTS } from '@/lib/constants'  

export default function Projects() {
  const PROJECTS_TO_USE = PROJECTS
  
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