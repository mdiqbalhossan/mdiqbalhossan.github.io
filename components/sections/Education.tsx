'use client'

// Temporary hardcoded data for testing - using actual data from constants
const TEST_EDUCATION = [
  {
    id: "bachelor-cs",
    institution: "Institute of Science and Technology",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    startDate: new Date("2021-11-01"),
    endDate: new Date("2026-09-01"),
    grade: "Running",
    description: "Focused on software engineering, data structures, algorithms, and web development. Completed multiple projects in various programming languages and frameworks.",
    achievements: [],
    image: "/images/education/placeholder.svg"
  }  
]

export default function Education() {
  // Using test data temporarily to fix empty sections
  const EDUCATION_TO_USE = TEST_EDUCATION
  
  console.log('Using test education data, count:', EDUCATION_TO_USE.length)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const calculateDuration = (startDate: Date, endDate?: Date) => {
    const end = endDate || new Date()
    const months = (end.getFullYear() - startDate.getFullYear()) * 12 + (end.getMonth() - startDate.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`
    } else {
      return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
    }
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-white mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Education & Certifications ({EDUCATION_TO_USE.length})</h2>
          <p className="text-gray-300 text-lg">
            My academic journey and professional certifications that have shaped my expertise in technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {EDUCATION_TO_USE.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 text-white border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <div className="text-blue-400 font-semibold mb-2">{edu.field}</div>
                      <div className="text-gray-300 mb-2">{edu.institution}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                      </div>
                      <div className="text-sm text-gray-400">
                        {calculateDuration(edu.startDate, edu.endDate)}
                      </div>
                      {edu.grade && (
                        <div className="bg-green-600 text-white px-2 py-1 rounded text-xs mt-2">
                          {edu.grade}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{edu.description}</p>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">🏆 Key Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
       

        {/* Skills Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Skills Gained Through Education</h3>
            <p className="text-gray-300">Core competencies developed through formal education and training</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures & Algorithms",
              "Software Engineering",
              "Database Design",
              "Web Development",
              "Cloud Computing",
              "System Architecture",
              "Project Management",
              "Research & Analysis",
              "Problem Solving",
              "Team Leadership",
              "Technical Writing",
              "Code Review"
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-3 py-2 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}