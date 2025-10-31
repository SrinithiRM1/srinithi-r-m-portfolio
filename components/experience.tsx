"use client"

export function Experience() {
  const experiences = [
    {
      position: "VLSI Physical Design Intern",
      company: "Maven Silicon",
      duration: "May 2025 – July 2025",
      description:
        "Gaining hands-on experience in VLSI physical design flows including synthesis, floorplanning, routing, and static timing analysis using industry-standard CAD tools and methodologies.",
      skills: ["Cadence", "QFlow", "Physical Design"],
      status: "Active",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">Internship Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-300/40 to-pink-300/40 glass rounded-2xl p-8 border-2 border-white/40 hover:border-white/60 transition-smooth hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-purple-700">{exp.position}</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-1">{exp.company}</h3>
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-300 to-yellow-200 text-slate-800 rounded-full text-sm font-medium">
                  {exp.status}
                </span>
              </div>

              <p className="text-slate-700 mb-4">{exp.description}</p>

              <p className="text-sm text-slate-600 font-medium mb-4">{exp.duration}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-white/60 text-slate-800 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
