"use client"

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Motivated and detail-oriented undergraduate student at VIT Chennai specializing in VLSI design and
              embedded systems. Experienced with RTL, physical design tools, microcontrollers, and creative design.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Strong interest in merging art principles with engineering precision to build efficient and user-centric
              electronics and layouts. Currently leading the Art Club at VIT Chennai, where I blend creative vision with
              technical execution.
            </p>

            <div className="pt-6 space-y-3">
              <h3 className="font-semibold text-slate-800">Key Strengths:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  VLSI Physical Design & CAD Tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-yellow-300 rounded-full" />
                  Embedded Systems Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                  Creative Design & Art Direction
                </li>
              </ul>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-4">
            <div className="glass rounded-2xl p-6 border-2 border-white/40 hover:border-white/60 transition-smooth">
              <p className="text-sm font-medium text-purple-600 mb-1">Current Role</p>
              <h3 className="text-xl font-bold text-slate-800">Design Lead, Art Club</h3>
              <p className="text-sm text-slate-600 mt-2">VIT Chennai</p>
            </div>

            <div className="glass rounded-2xl p-6 border-2 border-white/40 hover:border-white/60 transition-smooth">
              <p className="text-sm font-medium text-pink-600 mb-1">Specialization</p>
              <h3 className="text-xl font-bold text-slate-800">VLSI & Embedded Systems</h3>
              <p className="text-sm text-slate-600 mt-2">Physical Design | RTL | Microcontrollers</p>
            </div>

            <div className="glass rounded-2xl p-6 border-2 border-white/40 hover:border-white/60 transition-smooth">
              <p className="text-sm font-medium text-cyan-600 mb-1">Location</p>
              <h3 className="text-xl font-bold text-slate-800">Chennai, India</h3>
              <p className="text-sm text-slate-600 mt-2">VIT Chennai Campus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
