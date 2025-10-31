"use client"

export function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Stars - scattered across the background */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute glow-star"
          style={{
            width: Math.random() > 0.5 ? "2px" : "3px",
            height: Math.random() > 0.5 ? "2px" : "3px",
            backgroundColor: Math.random() > 0.5 ? "#ffffff" : "#fff5e6",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: Math.random() > 0.5 ? "0 0 6px rgba(255, 255, 255, 0.8)" : "none",
          }}
        />
      ))}

      {/* Floating clouds effect - subtle gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-3xl" />
    </div>
  )
}
