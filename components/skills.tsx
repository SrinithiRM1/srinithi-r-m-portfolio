"use client"

export function Skills() {
  const skillCategories = [
    {
      category: "VLSI & CAD Tools",
      skills: ["Physical Design", "QFlow", "Cadence", "Synthesis", "STA", "Floorplanning", "Routing"],
      icon: "⚙️",
    },
    {
      category: "Embedded Systems",
      skills: ["Arduino", "8051 Microcontroller", "Microcontrollers", "Hardware Programming"],
      icon: "🔌",
    },
    {
      category: "Programming",
      skills: ["Verilog", "Python", "C/C++"],
      icon: "💻",
    },
    {
      category: "Creative & Design",
      skills: ["Graphic Design", "UI/UX Design", "Art Direction", "Visual Design"],
      icon: "🎨",
    },
  ]

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
        <p className="text-slate-700 text-lg mb-12">
          A diverse skill set spanning engineering precision and creative innovation
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 border-2 border-white/40 hover:border-white/60 transition-smooth hover:shadow-xl"
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6">
                <span className="text-3xl">{category.icon}</span>
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-gradient-to-r from-purple-400/60 to-pink-300/60 text-slate-800 rounded-full text-sm font-medium border border-white/40 hover:border-white/60 transition-colors"
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
