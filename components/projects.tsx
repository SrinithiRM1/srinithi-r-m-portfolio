"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { ProjectModal } from "./project-modal"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

const projectsData = [
  {
    title: "VLSI SPI Implementation using QFlow",
    description:
      "Complete VLSI physical design flow implementation for SPI module including synthesis, floorplanning, placement, routing and STA.",
    fullDescription:
      "Performed full Physical Design implementation of a Serial Peripheral Interface module using the open-source Qflow EDA toolchain. Completed synthesis, floorplanning, placement, routing, and STA. Learned backend ASIC design flow hands-on.",
    tags: ["QFlow", "Cadence", "Physical Design", "SPI"],
    color: "from-purple-300/40 to-pink-300/40",
    image: "/vlsi-spi-implementation-qflow.jpg",
    link: "https://drive.google.com/file/d/1gdqMmNYbzHXchj6yAJWGtXoHK92AK3VC/view?usp=sharing",
    linkLabel: "View on Drive",
  },
  {
    title: "Bluetooth-Controlled Home Automation",
    description:
      "IoT-based home automation system using Arduino and Bluetooth module for wireless control of household appliances with real-time feedback.",
    fullDescription:
      "Designed 8051 + Bluetooth wireless home automation system. Controlled devices via smartphone app. Implemented UART, relay logic, driver circuits.",
    tags: ["Arduino", "Bluetooth", "Embedded Systems"],
    color: "from-yellow-300/40 to-purple-300/40",
    image: "/bluetooth-home-automation.jpg",
    link: "https://youtu.be/0N0DRjw86d4",
    linkLabel: "Watch Demo",
  },
  {
    title: "Smart Street Light using Arduino",
    description:
      "Energy-efficient street lighting system using motion sensors and Arduino microcontroller to automatically control street lights based on movement detection.",
    fullDescription: "Arduino + IR + PIR smart lighting. Activates only when needed → reduces energy waste.",
    tags: ["Arduino", "Sensors", "IoT"],
    color: "from-cyan-300/40 to-purple-300/40",
    image: "/smart-street-light.jpg",
    link: "https://drive.google.com/file/d/1wcx8vtk5C6VUWMP9WRqOoAV1ZseaTv9T/view?usp=sharing",
    linkLabel: "View Project",
  },
  {
    title: "Drowsiness Detection using Python-OpenCV",
    description:
      "Computer vision-based system to detect driver drowsiness in real-time using facial landmarks and eye closure detection for safety alerts.",
    fullDescription:
      "Real-time driver drowsiness detection using OpenCV. Eye-tracking, threshold-based alerting, sound alarm.",
    tags: ["Python", "OpenCV", "Machine Learning"],
    color: "from-pink-300/40 to-yellow-200/40",
    image: "/drowsiness-detection-opencv.jpg",
    link: "https://drive.google.com/file/d/1gdqMmNYbzHXchj6yAJWGtXoHK92AK3VC/view?usp=sharing",
    linkLabel: "View Details",
  },
  {
    title: "Fire Alarm Circuit using Transistors",
    description:
      "Electronic circuit design for fire detection and alarm system using temperature sensor and transistor-based switching mechanism.",
    fullDescription: "Low-cost heat sensor circuit using transistor biasing to detect fire events.",
    tags: ["Electronics", "Circuit Design", "Transistors"],
    color: "from-blue-300/40 to-cyan-300/40",
    image: "/fire-alarm-circuit.jpg",
    link: "https://drive.google.com/file/d/1cXE8QEbiF8jrnrmVaLH_vBgvUAX4Gpv_/view?usp=sharing",
    linkLabel: "View Schematic",
  },
  {
    title: "Heart Disease Prediction using RStudio",
    description:
      "Statistical analysis and machine learning model for predicting heart disease risk using R and RStudio with medical datasets.",
    fullDescription: "Exploratory data analysis + ML-based prediction for cardiac-risk dataset in RStudio.",
    tags: ["R", "RStudio", "Data Analysis"],
    color: "from-purple-300/40 to-pink-200/40",
    image: "/heart-disease-prediction.jpg",
    link: "https://drive.google.com/file/d/1QsdCHXftRMh_-PODQyLyt4L7bAdc0SKk/view?usp=sharing",
    linkLabel: "View Analysis",
  },
  {
    title: "RCA and Weinberger Implementation",
    description: "Advanced signal processing techniques implementation for circuit analysis.",
    fullDescription: "Implementing RCA and Weinberger methodologies for circuit analysis and optimization.",
    tags: ["VLSI", "Signal Processing", "Analysis"],
    color: "from-teal-300/40 to-blue-300/40",
    image: "/rca-weinberger-implementation.jpg",
    link: "https://drive.google.com/file/d/1ixtUUH8tZNYP4hOCpgalgA4blWn2dL3b/view?usp=sharing",
    linkLabel: "View Research",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <ScrollAnimationWrapper>
      <section id="projects" className="py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                onClick={() => handleProjectClick(project)}
                className={`bg-gradient-to-br ${project.color} glass rounded-2xl p-6 border-2 border-white/40 transition-all duration-300 cursor-pointer group hover:scale-105 hover:border-purple-300/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors pr-4">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-1 group-hover:scale-110" />
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

        {selectedProject && <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} project={selectedProject} />}
      </section>
    </ScrollAnimationWrapper>
  )
}
