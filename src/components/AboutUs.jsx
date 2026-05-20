import React from 'react';
import glassImage from '../assets/glass.png';

const trustFeatures = [
  {
    id: 1,
    title: 'Premium Quality',
    icon: (
      <svg
        className="w-6 h-6 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Safe & Hygienic',
    icon: (
      <svg
        className="w-6 h-6 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Balanced Minerals',
    icon: (
      <svg
        className="w-6 h-6 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-3.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Healthy Lifestyle',
    icon: (
      <svg
        className="w-6 h-6 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-20 bg-[#C2E7FF] mt-0 relative overflow-hidden"
    >

      {/* Decorative Background */}
      <div className="absolute right-10 top-1/4 w-32 h-32 pointer-events-none opacity-30 hidden lg:block">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#0B72B9"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        >
          <path d="M0,50 C30,20 70,80 100,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex justify-center">

          <div className="relative group w-full max-w-[420px]">

            <div className="absolute inset-0 bg-white/40 rounded-[2.5rem] transform translate-x-4 translate-y-4 filter blur-sm -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

            <div className="w-full h-[320px] md:h-[380px] rounded-[2.2rem] overflow-hidden border border-white/40 shadow-xl bg-[#F4F9FC]">

              <img
                src={glassImage}
                alt="Altair Pure Natural Source"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 space-y-6 text-left lg:pl-4">

          <div className="space-y-2">

            <p className="text-xs font-black tracking-widest text-[#0B72B9] uppercase">
              About Altair
            </p>

            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A2B3C] tracking-tight">
              Purity You Can See. <br />
              <span className="text-[#0B72B9]">Trust</span> You Can Feel.
            </h2>

          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold max-w-2xl opacity-90">
            At Altair, we believe that pure water is the foundation of a healthy
            life. Our state-of-the-art purification process ensures that every
            drop you drink is safe, clean, and refreshingly pure.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">

            {trustFeatures.map((feat) => (
              <div
                key={feat.id}
                className="bg-white border border-white/60 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(11,114,185,0.06)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >

                <div className="w-12 h-12 bg-[#F4F9FC] rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#C2E7FF]/50 transition-colors duration-300">
                  {feat.icon}
                </div>

                <h3 className="text-xs font-bold text-[#1A2B3C] tracking-tight leading-snug">
                  {feat.title}
                </h3>

              </div>
            ))}

          </div>

          <div className="pt-4">

            <button className="inline-flex items-center gap-2 border-2 border-[#0B72B9] bg-[#0B72B9] hover:bg-[#095A94] text-white font-bold text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group">
              Know More About Us

              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}