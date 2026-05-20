import React from 'react';
import qualityBg from '../assets/Qualityprocess.png';

const processSteps = [
  {
    id: '01',
    title: 'Careful Source Selection',
    icon: (
      <svg
        className="w-5 h-5 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a6 6 0 01-6-6c0-4 6-11 6-11s6 7 6 6a6 6 0 01-6 6z"
        />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Advanced Purification',
    icon: (
      <svg
        className="w-5 h-5 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a7 7 0 10-14 0v2"
        />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Mineral Balancing',
    icon: (
      <svg
        className="w-5 h-5 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14"
        />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Quality Testing',
    icon: (
      <svg
        className="w-5 h-5 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622"
        />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Sealed for Freshness',
    icon: (
      <svg
        className="w-5 h-5 text-[#0B72B9]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3h6v3H9zM7 6h10v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6z"
        />
      </svg>
    ),
  },
];

export default function QualityProcess() {
  return (
    <section
      id="quality-process"
      className="relative min-h-[520px] py-20 bg-no-repeat bg-cover bg-center flex items-center overflow-hidden bg-white select-none"
      style={{
        backgroundImage: `url(${qualityBg})`,
      }}
    >

      {/* Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-10 w-full">

          {/* Heading */}
          <div className="space-y-1">

            <p className="text-[11px] font-bold tracking-widest text-[#0B72B9] uppercase">
              Our Quality Process
            </p>

            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A2B3C] tracking-tight leading-tight">
              From Source to You, <br />
              With <span className="text-[#0B72B9]">Care</span>
            </h2>

          </div>

          {/* Timeline */}
          <div className="relative w-full pt-2">

            {/* Dashed Line */}
            <div className="hidden sm:block absolute top-10 left-[8%] right-[8%] h-0.5 border-t border-dashed border-gray-200 -z-10"></div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-3 gap-y-8 items-start">

              {processSteps.map((step, idx) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center group relative"
                >

                  {/* Circle */}
                  <div className="w-16 h-16 bg-white border border-gray-100/80 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(11,114,185,0.04)] group-hover:shadow-[0_15px_30px_rgba(11,114,185,0.1)] transition-all duration-300 ease-out transform group-hover:-translate-y-0.5 bg-gradient-to-b from-white to-[#F4F9FC]/30">

                    {step.icon}

                  </div>

                  {/* Labels */}
                  <div className="mt-4 space-y-1 px-0.5">

                    <span className="block text-[10px] font-black tracking-wider text-[#0B72B9]">
                      {step.id}
                    </span>

                    <h3 className="font-heading font-bold text-[11px] text-[#1A2B3C] tracking-tight leading-tight max-w-[100px] mx-auto transition-colors duration-200 group-hover:text-[#0B72B9]">
                      {step.title}
                    </h3>

                  </div>

                  {/* Mobile Arrow */}
                  {idx !== processSteps.length - 1 && (
                    <div className="sm:hidden absolute right-[-12px] top-6 text-gray-300 text-xs font-bold pointer-events-none select-none">
                      →
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT EMPTY COLUMN */}
        <div className="hidden lg:col-span-5 lg:block"></div>

      </div>

    </section>
  );
}