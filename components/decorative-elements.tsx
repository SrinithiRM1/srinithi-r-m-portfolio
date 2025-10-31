"use client"

export function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      <svg className="absolute top-0 left-0 w-full h-64" preserveAspectRatio="none" viewBox="0 0 1200 300">
        {/* Cloud shapes using curved paths */}
        <defs>
          <filter id="cloudBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Large cloud - top left */}
        <path
          d="M 100 150 Q 150 100 200 150 Q 250 100 300 150 Q 350 120 400 150 L 400 250 Q 200 280 100 250 Z"
          fill="rgba(255, 255, 255, 0.6)"
          filter="url(#cloudBlur)"
          className="floating-shape-slow"
        />

        {/* Medium cloud - top center */}
        <path
          d="M 500 120 Q 550 70 600 120 Q 650 80 700 120 Q 750 90 800 120 L 800 240 Q 650 270 500 240 Z"
          fill="rgba(255, 240, 245, 0.5)"
          filter="url(#cloudBlur)"
          className="floating-shape"
        />

        {/* Large cloud - top right */}
        <path
          d="M 900 140 Q 950 90 1000 140 Q 1050 100 1100 140 Q 1150 110 1200 140 L 1200 260 Q 1050 290 900 260 Z"
          fill="rgba(255, 255, 255, 0.65)"
          filter="url(#cloudBlur)"
          className="floating-shape-slow"
        />
      </svg>

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
