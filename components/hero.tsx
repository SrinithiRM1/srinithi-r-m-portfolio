"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          <div>
            <p className="text-sm font-medium text-purple-600 mb-2">Welcome 👋</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Srinithi
              </span>
            </h1>
          </div>

          <p className="text-xl text-slate-700 leading-relaxed font-semibold">
            VLSI & Embedded Systems Engineer | Design Lead | Tech-Creative Innovator
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            Undergraduate ECE student at VIT Chennai, passionate about VLSI physical design, embedded systems, and
            blending engineering with creativity.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
              >
                <Download size={18} />
                View Resume
              </Button>
            </a>
            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/70 backdrop-blur border-2 border-white/50 text-slate-800 hover:bg-white/90"
              >
                Explore Projects
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>

        {/* Right - Profile Image Area */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-pink-100/30 rounded-3xl transform rotate-3 blur-xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-pink-200/50 to-purple-200/50 rounded-3xl glass" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-purple-100/30 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 flex items-center justify-center">
                <svg className="w-40 h-40 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-300 to-yellow-200 rounded-full p-4 shadow-lg border-4 border-white floating-shape">
              <div className="flex items-center justify-center w-16 h-16">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
