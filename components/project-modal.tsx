"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    fullDescription: string
    image: string
    link: string
    linkLabel: string
    tags: string[]
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setTimeout(() => setIsVisible(false), 300)
    }
  }, [isOpen])

  if (!isOpen && !isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative bg-gradient-to-br from-pink-200/60 to-purple-200/60 backdrop-blur-xl rounded-3xl border-2 border-white/40 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-400 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen ? "springPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-slate-700" />
        </button>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 pr-8">{project.title}</h2>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=256&width=512&query=" + project.title
              }}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">About this project</h3>
            <p className="text-slate-700 leading-relaxed text-base">{project.fullDescription}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/60 text-slate-800 text-sm font-medium rounded-full hover:bg-white/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {project.linkLabel}
          </a>
        </div>
      </div>
    </div>
  )
}
