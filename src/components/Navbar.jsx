import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // Track active link state for the under-line animation slide
  const [activeLink, setActiveLink] = useState('#home');
  // Track scroll state to change navbar opacity/shadow dynamically
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Our Products', href: '#our-products' },
    { name: 'Quality Process', href: '#quality-process' },
    { name: 'Distributor', href: '#distributor' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-[#F4F9FC]/95 shadow-md h-16' 
          : 'bg-gradient-to-r from-[#F4F9FC]/90 to-transparent h-20'
      } backdrop-blur-md border-b border-[#C2E7FF]/20`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left Side: Brand Master Logo Image Link */}
        <a 
          href="#home" 
          onClick={() => setActiveLink('#home')}
          className="flex items-center h-full max-w-[180px] sm:max-w-[220px] transition-transform duration-200 hover:scale-[1.02]"
        >
          <img 
            src="public\Altair-logo-final-1.png" 
            alt="Altair Food & Beverage Pvt. Ltd" 
            className="w-full h-auto object-contain max-h-[55px]"
            onError={(e) => {
              // Fallback if the image path isn't resolving yet in public folder
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Text Fallback system hidden by default unless image fails */}
          <div className="hidden flex-col items-start">
            <span className="font-sans font-black text-2xl text-[#0B72B9] tracking-tight leading-none">Altair</span>
            <span className="text-[8px] text-[#0B72B9] uppercase font-bold tracking-widest mt-0.5">Food & Beverage Pvt. Ltd</span>
          </div>
        </a>

        {/* Center Side: Spaced Horizontal Links Grid */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-semibold text-[#1A2B3C]">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <div key={link.name} className="relative py-2 group">
                <a 
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`transition-colors duration-300 ease-in-out py-2 block ${
                    isActive ? 'text-[#0B72B9]' : 'text-[#1A2B3C]/80 hover:text-[#0B72B9]'
                  }`}
                >
                  {link.name}
                </a>
                {/* Active indicator bar + Hover transition slide animation */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#0B72B9] rounded-full transition-all duration-300 ease-in-out ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                  }`}
                ></span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Filled Primary Enquire Button */}
        <div>
          <button className="bg-[#0B72B9] hover:bg-[#095A94] text-white text-sm font-bold px-7 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 tracking-wide transform">
            Enquire Now
          </button>
        </div>

      </div>
    </nav>
  );
}