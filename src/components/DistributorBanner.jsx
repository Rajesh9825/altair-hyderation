import React from 'react';

import distributorBg from '../assets/bistributorbanner.png';
import bannerBottles from '../assets/banner2bottles.png';

const partnerPerks = [
  { id: 1, text: 'Attractive Profit Margin' },
  { id: 2, text: 'Timely Delivery Support' },
  { id: 3, text: 'Marketing Support' },
  { id: 4, text: 'Trusted Brand Partnership' },
];

export default function DistributorBanner() {
  return (
    <section
      id="distributor"
      className="relative min-h-[420px] py-20 flex items-center overflow-visible bg-cover bg-center bg-no-repeat mt-0 select-none"
      style={{
        backgroundImage: `url(${distributorBg})`,
      }}
    >

      {/* World Map Overlay */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 bg-no-repeat bg-contain bg-right opacity-10 mix-blend-screen pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_blank_black_white.png')",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 overflow-visible">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-5 text-left text-white">

          <p className="text-xs font-bold tracking-widest text-[#C2E7FF] uppercase">
            Grow With Altair
          </p>

          <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.15]">
            Let’s Build a Healthier <br />
            Tomorrow <span className="text-[#64B5F6]">Together</span>
          </h2>

          <p className="text-sm text-white/80 font-medium max-w-sm leading-relaxed">
            Join our growing network of distributors and be a part of a brand
            that stands for purity, quality, and trust.
          </p>

          <div className="pt-2">

            <button className="bg-white hover:bg-[#F4F9FC] text-[#0B72B9] font-bold text-xs px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider">
              Become a Distributor →
            </button>

          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="lg:col-span-4 flex justify-center items-center relative overflow-visible mt-12 lg:mt-0">

          <div className="relative w-full overflow-visible flex justify-center">

            <img
              src={bannerBottles}
              alt="Altair Premium Hydration Partner Bottles"
              className="w-full h-auto object-contain lg:absolute lg:-top-[260px] z-30 drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)] transform scale-125 lg:scale-[1.65] origin-[50%_5%] pointer-events-none"
            />

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-4 lg:pl-6 text-white relative z-10">

          {partnerPerks.map((perk) => (
            <div
              key={perk.id}
              className="flex items-center gap-3.5 group cursor-default"
            >

              {/* Check Circle */}
              <div className="w-8 h-8 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white font-bold transition-all duration-300 group-hover:bg-white group-hover:text-[#0B72B9] group-hover:scale-105">

                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>

                </svg>

              </div>

              <span className="text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 group-hover:text-[#C2E7FF]">
                {perk.text}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}