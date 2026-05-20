import React from 'react';

// Structured data mapping the exact SKUs from your premium layout design
const products = [
  { id: 1, capacity: '250ml', type: 'Bottle', image: 'src/assets/products/250ml-bottle.png' },
  { id: 2, capacity: '500ml', type: 'Bottle', image: 'src/assets/products/500ml-bottle.png' },
  { id: 3, capacity: '1L', type: 'Bottle', image: 'src/assets/products/250ml-bottle.png' },
  { id: 4, capacity: '2L', type: 'Bottle', image: 'src/assets/products/250ml-bottle.png' },
  { id: 5, capacity: '20L', type: 'Jar', image: 'src/assets/products/250ml-bottle.png' },
];

export default function Products() {
  return (
    <section id="our-products" className="py-20 bg-white relative overflow-hidden">
      
      {/* Subtle Background Water Bubbles/Droplets Vector Accents */}
      <div className="absolute right-4 top-12 w-24 h-24 rounded-full bg-[#C2E7FF]/15 filter blur-xl pointer-events-none"></div>
      <div className="absolute left-6 bottom-20 w-32 h-32 rounded-full bg-[#0B72B9]/5 filter blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Heading Area */}
        <div className="text-left mb-12 space-y-1">
          <p className="text-xs font-bold tracking-widest text-[#0B72B9] uppercase">
            Our Products
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A2B3C] tracking-tight">
            Made for <span className="text-[#0B72B9]">Every Need</span>
          </h2>
        </div>

        {/* 🚀 THE 5-COLUMN PRODUCT CARDS GRID SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(26,43,60,0.03)] hover:shadow-[0_20px_40px_rgba(11,114,185,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              
              {/* Product Visual Frame with Splash Backdrop Render Effect */}
              <div className="w-full h-56 bg-gradient-to-b from-[#F4F9FC] to-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                
                {/* Simulated Water Splash Asset Layer */}
                <div className="absolute bottom-4 inset-x-0 mx-auto w-3/4 h-44 bg-no-repeat bg-contain bg-center opacity-70 filter saturate-150 group-hover:scale-110 transition-transform duration-500 ease-out"
                     style={{ backgroundImage: "url('src/assets/products/smashedwater.png')" }}>
                </div>

                {/* Main Product SKU Graphic Render Node */}
                <img 
                  src={item.image} 
                  alt={`Altair ${item.capacity} ${item.type}`} 
                  className="h-40 w-auto object-contain relative z-10 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-out drop-shadow-[0_10px_15px_rgba(11,114,185,0.1)]"
                  onError={(e) => {
                    // Fail-safe placeholder visual box structure if local graphics are missing
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Graphic placeholder container */}
                <div className="hidden w-12 h-32 bg-gradient-to-b from-[#C2E7FF] to-[#0B72B9]/40 rounded-xl relative z-10 shadow-inner items-center justify-center border border-white">
                  <span className="text-[9px] text-white font-black uppercase rotate-90">{item.capacity}</span>
                </div>

              </div>

              {/* Product Identity Labels Details Section */}
              <div className="mt-5 space-y-4">
                <div className="space-y-0.5 text-left">
                  <h3 className="font-heading font-extrabold text-xl text-[#1A2B3C]">
                    {item.capacity}
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    {item.type}
                  </p>
                </div>

                {/* Text Action Hyperlink element */}
                <a 
                  href={`#inquire-${item.capacity}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B72B9] hover:text-[#095A94] transition-colors group/link pt-1"
                >
                  View Details 
                  <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Global Catalog Main CTA Layout Button Footer */}
        <div className="text-center mt-12">
          <button className="bg-[#0B72B9] hover:bg-[#095A94] text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wide">
            View All Products →
          </button>
        </div>

      </div>
    </section>
  );
}