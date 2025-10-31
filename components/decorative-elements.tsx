"use client"

export function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Top Clouds - Pink section */}
      <svg className="absolute top-0 left-0 w-full h-80" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 400">
        <defs>
          <filter id="softBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Large fluffy cloud - top left */}
        <ellipse
          cx="150"
          cy="120"
          rx="90"
          ry="60"
          fill="rgba(255, 255, 255, 0.8)"
          filter="url(#softBlur)"
          className="floating-shape-slow"
        />
        <ellipse
          cx="210"
          cy="100"
          rx="70"
          ry="50"
          fill="rgba(255, 240, 245, 0.75)"
          filter="url(#softBlur)"
          className="floating-shape-slow"
        />
        <ellipse
          cx="110"
          cy="140"
          rx="60"
          ry="45"
          fill="rgba(255, 255, 255, 0.85)"
          filter="url(#softBlur)"
          className="floating-shape-slow"
        />

        {/* Medium cloud - top center */}
        <ellipse
          cx="600"
          cy="80"
          rx="120"
          ry="70"
          fill="rgba(255, 255, 255, 0.8)"
          filter="url(#softBlur)"
          className="floating-shape"
        />
        <ellipse
          cx="700"
          cy="100"
          rx="85"
          ry="55"
          fill="rgba(255, 220, 230, 0.75)"
          filter="url(#softBlur)"
          className="floating-shape"
        />
        <ellipse
          cx="520"
          cy="110"
          rx="95"
          ry="60"
          fill="rgba(255, 255, 255, 0.8)"
          filter="url(#softBlur)"
          className="floating-shape"
        />

        {/* Large cloud - top right */}
        <ellipse
          cx="1050"
          cy="130"
          rx="100"
          ry="65"
          fill="rgba(255, 255, 255, 0.8)"
          filter="url(#softBlur)"
          className="floating-shape-slow"
        />
        <ellipse
          cx="1130"
          cy="110"
          rx="80"
          ry="50"
          fill="rgba(255, 240, 245, 0.75)"
          filter="url(#softBlur)"
          className="floating-shape-slow"
        />
        <ellipse
          cx="970"
          cy="120"
          rx="75"
          ry="48"
          fill="rgba(255, 255, 255, 0.85)"
          filter="url(#softBlur)"
          className="floating-shape-slow"
        />

        {/* Small clouds scattered */}
        <ellipse
          cx="300"
          cy="250"
          rx="50"
          ry="35"
          fill="rgba(255, 245, 250, 0.65)"
          filter="url(#softBlur)"
          className="floating-shape"
        />
        <ellipse
          cx="900"
          cy="280"
          rx="60"
          ry="40"
          fill="rgba(255, 255, 255, 0.7)"
          filter="url(#softBlur)"
          className="floating-shape"
        />
      </svg>

      {/* Stars - scattered across the background */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute glow-star"
          style={{
            width: Math.random() > 0.6 ? "3px" : "2px",
            height: Math.random() > 0.6 ? "3px" : "2px",
            backgroundColor: Math.random() > 0.3 ? "#ffeb3b" : "#fff",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.4,
            animationDelay: `${Math.random() * 5}s`,
            boxShadow: `0 0 ${Math.random() > 0.5 ? "8px" : "4px"} rgba(${Math.random() > 0.5 ? "255, 235, 59" : "255, 255, 255"}, ${Math.random() * 0.6 + 0.3})`,
          }}
        />
      ))}

      {/* Floating clouds effect - subtle gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-3xl" />
    </div>
  )
}
