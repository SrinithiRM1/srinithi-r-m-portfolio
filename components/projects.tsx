"use client"

import { ArrowUpRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "VLSI SPI Implementation using QFlow",
      description:
        "Complete VLSI physical design flow implementation for SPI (Serial Peripheral Interface) module including synthesis, floorplanning, placement, routing and STA.",
      tags: ["QFlow", "Cadence", "Physical Design", "SPI"],
      color: "from-purple-300/40 to-pink-300/40",
    },
    {
      title: "Bluetooth-Controlled Home Automation",
      description:
        "IoT-based home automation system using Arduino and Bluetooth module for wireless control of household appliances with real-time feedback.",
      tags: ["Arduino", "Bluetooth", "Embedded Systems"],
      color: "from-yellow-300/40 to-purple-300/40",
    },
    {
      title: "Smart Street Light using Arduino",
      description:
        "Energy-efficient street lighting system using motion sensors and Arduino microcontroller to automatically control street lights based on movement detection.",
      tags: ["Arduino", "Sensors", "IoT"],
      color: "from-cyan-300/40 to-purple-300/40",
    },
    {
      title: "Drowsiness Detection using Python-OpenCV",
      description:
        "Computer vision-based system to detect driver drowsiness in real-time using facial landmarks and eye closure detection for safety alerts.",
      tags: ["Python", "OpenCV", "Machine Learning"],
      color: "from-pink-300/40 to-yellow-200/40",
    },
    {
      title: "Fire Alarm Circuit using Transistors",
      description:
        "Electronic circuit design for fire detection and alarm system using temperature sensor and transistor-based switching mechanism.",
      tags: ["Electronics", "Circuit Design", "Transistors"],
      color: "from-blue-300/40 to-cyan-300/40",
    },
    {
      title: "Heart Disease Prediction using RStudio",
      description:
        "Statistical analysis and machine learning model for predicting heart disease risk using R and RStudio with medical datasets.",
      tags: ["R", "RStudio", "Data Analysis"],
      color: "from-purple-300/40 to-pink-200/40",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${project.color} glass rounded-2xl p-6 border-2 border-white/40 hover:border-white/60 hover:shadow-xl transition-smooth hover:-translate-y-1 group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors pr-4">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-1" />
              </div>

              <p className="text-sm text-slate-700 mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs font-medium px-2.5 py-1 bg-white/60 text-slate-800 rounded-full"
                  >
                    {tag}
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
