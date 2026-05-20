import React from 'react';

import bottle250 from '../assets/products/250ml-bottle.png';
import bottle500 from '../assets/products/250ml-bottle.png';
import bottle1L from '../assets/products/250ml-bottle.png';
import bottle2L from '../assets/products/250ml-bottle.png';
import jar20L from '../assets/products/250ml-bottle.png';
import smashedWater from '../assets/products/smashedwater.png';

// Structured Product Data
const products = [
  {
    id: 1,
    capacity: '250ml',
    type: 'Bottle',
    image: bottle250,
  },
  {
    id: 2,
    capacity: '500ml',
    type: 'Bottle',
    image: bottle500,
  },
  {
    id: 3,
    capacity: '1L',
    type: 'Bottle',
    image: bottle1L,
  },
  {
    id: 4,
    capacity: '2L',
    type: 'Bottle',
    image: bottle2L,
  },
  {
    id: 5,
    capacity: '20L',
    type: 'Jar',
    image: jar20L,
  },
];

export default function Products() {
  return (
    <section
      id="our-products"
      className="py-20 bg-white relative overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute right-4 top-12 w-24 h-24 rounded-full bg-[#C2E7FF]/15 filter blur-xl pointer-events-none"></div>

      <div className="absolute left-6 bottom-20 w-32 h-32 rounded-full bg-[#0B72B9]/5 filter blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Section Heading */}
        <div className="text-left mb-12 space-y-1">

          <p className="text-xs font-bold tracking-widest text-[#0B72B9] uppercase">
            Our Products
          </p>

          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A2B3C] tracking-tight">
            Made for <span className="text-[#0B72B9]">Every Need</span>
          </h2>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-3xl p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(26,43,60,0.03)] hover:shadow-[0_20px_40px_rgba(11,114,185,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >

              {/* Product Image Frame */}
              <div className="w-full h-56 bg-gradient-to-b from-[#F4F9FC] to-white rounded-2xl flex items-center justify-center relative overflow-hidden">

                {/* Water Splash Effect */}
                <div
                  className="absolute bottom-4 inset-x-0 mx-auto w-3/4 h-44 bg-no-repeat bg-contain bg-center opacity-70 filter saturate-150 group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{
                    backgroundImage: `url(${smashedWater})`,
                  }}
                ></div>

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={`Altair ${item.capacity} ${item.type}`}
                  className="h-40 w-auto object-contain relative z-10 transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-out drop-shadow-[0_10px_15px_rgba(11,114,185,0.1)]"
                />

              </div>

              {/* Product Details */}
              <div className="mt-5 space-y-4">

                <div className="space-y-0.5 text-left">

                  <h3 className="font-heading font-extrabold text-xl text-[#1A2B3C]">
                    {item.capacity}
                  </h3>

                  <p className="text-sm font-semibold text-gray-400">
                    {item.type}
                  </p>

                </div>

                {/* CTA Link */}
                <a
                  href={`#inquire-${item.capacity}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B72B9] hover:text-[#095A94] transition-colors group/link pt-1"
                >

                  View Details

                  <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>

                </a>

              </div>

            </div>
          ))}

        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">

          <button className="bg-[#0B72B9] hover:bg-[#095A94] text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wide">
            View All Products →
          </button>

        </div>

      </div>

    </section>
  );
}