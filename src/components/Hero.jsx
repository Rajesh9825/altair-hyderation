import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 pb-20 flex items-center bg-cover bg-center bg-no-repeat"
      // Setting the entire background to your beautiful water image
      style={{ backgroundImage: "url('src/assets/herobottle2.png')" }}
    >
      
      {/* Light Overlay: Ensures text remains sharp and highly readable against the background */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Premium Typography Content */}
        {/* Adjusted spacing from space-y-6 to space-y-5 to naturally lift the bottom elements */}
        <div className="lg:col-span-7 space-y-5 text-left flex flex-col justify-center">
          
          {/* Sub-kicker */}
          <p className="text-xs font-bold tracking-widest text-[#0B72B9] uppercase drop-shadow-sm">
            Pure By Nature
          </p>

          {/* Main Title */}
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight text-[#1A2B3C] leading-[1.1]">
            Stay Pure. <br />
            <span className="text-[#0B72B9]">Stay Refreshed.</span>
          </h1>

          {/* Descriptive Subtext */}
          <p className="text-sm md:text-base text-gray-700 max-w-lg leading-relaxed font-medium">
            Altair delivers premium quality drinking water crafted with purity, care, and advanced purification for a healthier you.
          </p>

          {/* Interactive Dual Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-1">
            <button className="bg-[#0B72B9] hover:bg-[#095A94] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group">
              Explore Products 
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            
            <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-[#1A2B3C] border border-gray-200 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all duration-200">
              Become Distributor →
            </button>
          </div>

          {/* ⬆️ Thin Line USP Badges Row (Shifted upward by changing pt-8 to pt-4) */}
          <div className="pt-4 border-t border-gray-200/60 flex flex-wrap gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <span className="text-[#0B72B9] text-sm">🔹</span> RO + UV Purified
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#0B72B9] text-sm">🔹</span> Mineral Balanced
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#0B72B9] text-sm">🔹</span> Safe & Hygienic
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Empty frame ensuring the background bottle has clear breathing room */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          {/* Floating badge section removed cleanly */}
        </div>

      </div>

      {/* 🌊 THE CURVE BREAK MASK: Re-engineered to exactly match the curvature of your 2nd reference image */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg 
          className="relative block w-full h-[70px] md:h-[120px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Adjusted cubic bezier control anchors to match the wave asymmetry shown in your reference image */}
          <path 
            d="M0,103 C180,65 420,130 700,115 C920,90 1050,55 1200,100 L1200,120 L0,120 Z"
            fill="#C2E7FF" // 🚀 Updated to blend flawlessly into your new background color!
          ></path>
        </svg>
      </div>

    </section>
  );
}