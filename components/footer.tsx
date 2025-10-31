"use client"

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-gradient-to-b from-transparent to-white/30 backdrop-blur border-t border-white/20">
      <svg className="absolute bottom-0 left-0 w-full h-64 -z-10" preserveAspectRatio="none" viewBox="0 0 1200 300">
        <defs>
          <filter id="flowerBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Flower cluster - left side */}
        <g className="floating-shape" opacity="0.8">
          {/* Petals */}
          <circle cx="100" cy="200" r="8" fill="rgba(255, 182, 193, 0.7)" filter="url(#flowerBlur)" />
          <circle cx="120" cy="180" r="8" fill="rgba(255, 192, 203, 0.7)" filter="url(#flowerBlur)" />
          <circle cx="140" cy="200" r="8" fill="rgba(221, 160, 221, 0.7)" filter="url(#flowerBlur)" />
          <circle cx="120" cy="220" r="8" fill="rgba(255, 240, 245, 0.7)" filter="url(#flowerBlur)" />
          {/* Center */}
          <circle cx="120" cy="200" r="6" fill="rgba(255, 215, 0, 0.8)" filter="url(#flowerBlur)" />
        </g>

        {/* Flower cluster - center */}
        <g className="floating-shape-slow" opacity="0.75">
          {/* Petals */}
          <circle cx="600" cy="220" r="10" fill="rgba(255, 182, 193, 0.6)" filter="url(#flowerBlur)" />
          <circle cx="625" cy="195" r="10" fill="rgba(221, 160, 221, 0.6)" filter="url(#flowerBlur)" />
          <circle cx="650" cy="220" r="10" fill="rgba(255, 192, 203, 0.6)" filter="url(#flowerBlur)" />
          <circle cx="625" cy="245" r="10" fill="rgba(255, 240, 245, 0.6)" filter="url(#flowerBlur)" />
          {/* Center */}
          <circle cx="625" cy="220" r="7" fill="rgba(255, 215, 0, 0.7)" filter="url(#flowerBlur)" />
        </g>

        {/* Flower cluster - right side */}
        <g className="floating-shape" opacity="0.7">
          {/* Petals */}
          <circle cx="1050" cy="210" r="9" fill="rgba(255, 182, 193, 0.65)" filter="url(#flowerBlur)" />
          <circle cx="1075" cy="185" r="9" fill="rgba(221, 160, 221, 0.65)" filter="url(#flowerBlur)" />
          <circle cx="1100" cy="210" r="9" fill="rgba(255, 192, 203, 0.65)" filter="url(#flowerBlur)" />
          <circle cx="1075" cy="235" r="9" fill="rgba(255, 240, 245, 0.65)" filter="url(#flowerBlur)" />
          {/* Center */}
          <circle cx="1075" cy="210" r="6" fill="rgba(255, 215, 0, 0.75)" filter="url(#flowerBlur)" />
        </g>

        {/* Small decorative stems and leaves */}
        <line
          x1="100"
          y1="200"
          x2="95"
          y2="280"
          stroke="rgba(200, 180, 200, 0.4)"
          strokeWidth="2"
          filter="url(#flowerBlur)"
        />
        <line
          x1="625"
          y1="220"
          x2="620"
          y2="290"
          stroke="rgba(200, 180, 200, 0.4)"
          strokeWidth="2"
          filter="url(#flowerBlur)"
        />
        <line
          x1="1075"
          y1="210"
          x2="1080"
          y2="285"
          stroke="rgba(200, 180, 200, 0.4)"
          strokeWidth="2"
          filter="url(#flowerBlur)"
        />
      </svg>
      {/* </CHANGE> */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-slate-700 font-medium mb-2">Srinithi R M</p>
        <p className="text-slate-600 text-sm">VLSI & Embedded Systems Engineer | VIT Chennai</p>
        <div className="mt-6 pt-6 border-t border-white/30">
          <p className="text-slate-500 text-xs">© 2025 Srinithi R M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
