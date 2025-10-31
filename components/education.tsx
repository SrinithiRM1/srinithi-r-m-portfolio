"use client"

export function Education() {
  const education = [
    {
      degree: "B.Tech Electronics & Communication Engineering",
      school: "VIT Chennai",
      cgpa: "9.16 CGPA",
      year: "Expected 2027",
      color: "from-purple-300/40 to-pink-300/40",
    },
    {
      degree: "B.Tech Data Science (Diploma Level)",
      school: "IIT Madras",
      cgpa: "7 CGPA",
      year: "Pursuing",
      color: "from-cyan-300/40 to-blue-300/40",
    },
    {
      degree: "12th Grade",
      school: "Saveetha Eco School",
      cgpa: "95.8%",
      year: "2023",
      color: "from-yellow-300/40 to-purple-300/40",
    },
    {
      degree: "JEE Mains",
      school: "National Level Exam",
      cgpa: "93 Percentile",
      year: "2023",
      color: "from-pink-300/40 to-purple-300/40",
    },
  ]

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${item.color} glass rounded-2xl p-8 border-2 border-white/40 hover:border-white/60 transition-smooth hover:shadow-xl`}
            >
              <p className="text-sm font-medium text-purple-700 mb-2">📚 {item.school}</p>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.degree}</h3>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <p className="font-semibold text-purple-700">{item.cgpa}</p>
                <p className="text-sm text-slate-600">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
