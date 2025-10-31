"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  age: number
}

export function CursorSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (Math.random() > 0.85) {
        const newSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          age: 0,
        }
        setSparkles((prev) => [...prev, newSparkle])
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => prev.map((s) => ({ ...s, age: s.age + 1 })).filter((s) => s.age < 30))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="pointer-events-none fixed w-2 h-2"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            opacity: 1 - sparkle.age / 30,
            transform: `translate(-50%, -50%) scale(${1 - sparkle.age / 40})`,
            transition: "all 0.1s ease-out",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full blur-sm animate-pulse" />
        </div>
      ))}
    </>
  )
}
