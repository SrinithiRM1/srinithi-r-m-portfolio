"use client"

export function Experience() {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">Internship Experience</h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-400 to-cyan-400" />

          {/* Experience Item */}
          <div className="space-y-12">
            <div className="md:w-1/2 md:ml-auto md:pl-12 pl-8">
              <div className="bg-gradient-to-br from-purple-300/40 to-pink-300/40 glass rounded-2xl p-8 border-2 border-white/40 hover:border-white/60 transition-smooth hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-purple-700">VLSI Physical Design Intern</p>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">Maven Silicon</h3>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-300 to-yellow-200 text-slate-800 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>

                <p className="text-slate-700 mb-4">
                  Gaining hands-on experience in VLSI physical design flows including synthesis, floorplanning, routing,
                  and static timing analysis using industry-standard CAD tools and methodologies.
                </p>

                <p className="text-sm text-slate-600 font-medium">May 2025 – July 2025</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/60 text-slate-800 text-xs font-medium rounded-full">Cadence</span>
                  <span className="px-3 py-1 bg-white/60 text-slate-800 text-xs font-medium rounded-full">QFlow</span>
                  <span className="px-3 py-1 bg-white/60 text-slate-800 text-xs font-medium rounded-full">
                    Physical Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
