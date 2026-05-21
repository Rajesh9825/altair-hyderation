import React from 'react';
import footerLogo from '../assets/Altair-Food-Beverage-Logo-Final.png';

export default function Footer() {
  // Dynamic Current Year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#C2E7FF] text-[#1A2B3C] pt-16 pb-0 relative overflow-hidden select-none">

      {/* Background Decorative Effects */}
      <div className="absolute right-[-5%] bottom-[-5%] w-72 h-72 bg-white/20 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="absolute left-[-5%] top-[-5%] w-60 h-60 bg-[#0B72B9]/5 rounded-full filter blur-2xl pointer-events-none z-0"></div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#1A2B3C]/10 relative z-10">

        {/* COLUMN 1 */}
        <div className="lg:col-span-3 space-y-5 text-left">

          {/* Logo */}
          <div className="flex items-center cursor-pointer max-w-[150px] transition-transform duration-200 hover:scale-[1.02]">

            <img
              src={footerLogo}
              alt="Altair Food & Beverage Pvt. Ltd"
              className="w-40 h-auto object-contain mt-0 mb-0 ml-5"
            />

          </div>

          {/* Description */}
          <p className="text-xs text-[#1A2B3C]/80 font-medium leading-relaxed max-w-xs">
            Altair is committed to delivering pure, healthy and refreshing
            drinking water for everyone.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-1">

            {['facebook', 'global', 'linkedin'].map((social) => (
              <button
                key={social}
                className="w-8 h-8 rounded-full bg-[#0B72B9] hover:bg-[#1A2B3C] border border-[#0B72B9]/20 text-white flex items-center justify-center text-xs shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                aria-label={`Follow Altair on ${social}`}
              >

                {social === 'facebook' && 'f'}
                {social === 'global' && '🌐'}
                {social === 'linkedin' && 'in'}

              </button>
            ))}

          </div>

        </div>

        {/* COLUMN 2 */}
        <div className="lg:col-span-2 space-y-4 text-left lg:pl-4">

          <h4 className="text-xs font-black uppercase tracking-wider text-[#0B72B9]">
            Quick Links
          </h4>

          <ul className="space-y-2.5 text-xs font-bold text-[#1A2B3C]/80">

            {[
              'Home',
              'About Us',
              'Our Products',
              'Quality Process',
              'Distributor',
              'Contact Us',
            ].map((item) => (
              <li key={item}>

                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#0B72B9] transition-colors duration-200"
                >
                  {item}
                </a>

              </li>
            ))}

          </ul>

        </div>

        {/* COLUMN 3 */}
        <div className="lg:col-span-2 space-y-4 text-left">

          <h4 className="text-xs font-black uppercase tracking-wider text-[#0B72B9]">
            Our Products
          </h4>

          <ul className="space-y-2.5 text-xs font-bold text-[#1A2B3C]/80">

            {[
              '250ml Bottle',
              '500ml Bottle',
              '1L Bottle',
              '2L Bottle',
              '20L Jar',
            ].map((item) => (
              <li key={item}>

                <a
                  href="#our-products"
                  className="hover:text-[#0B72B9] transition-colors duration-200"
                >
                  {item}
                </a>

              </li>
            ))}

          </ul>

        </div>

        {/* COLUMN 4 */}
        <div className="lg:col-span-2 space-y-4 text-left">

          <h4 className="text-xs font-black uppercase tracking-wider text-[#0B72B9]">
            Contact Us
          </h4>

          <div className="space-y-3 text-xs font-bold text-[#1A2B3C]/80">

            <div className="flex items-start gap-2.5 group">

              <span className="text-[#0B72B9] mt-0.5">📞</span>

              <a
                href="tel:+919876543210"
                className="hover:text-[#0B72B9] transition-colors"
              >
                +91 1234567890
              </a>

            </div>

            <div className="flex items-start gap-2.5 group">

              <span className="text-[#0B72B9] mt-0.5">✉️</span>

              <a
                href="mailto:info@altairfbs.com"
                className="hover:text-[#0B72B9] transition-colors break-all"
              >
                info@altairfbs.com
              </a>

            </div>

            <div className="flex items-start gap-2.5">

              <span className="text-[#0B72B9] mt-0.5">📍</span>

              <p className="leading-relaxed text-[#1A2B3C]/80">
                Office No 217 , 2nd Floor, PS Abacus ,<br />
                NH12 , Action Area 2E , Newtown Kolkata - 700161
              </p>

            </div>

          </div>

        </div>

        {/* COLUMN 5 */}
        <div className="lg:col-span-3 space-y-4 text-left">

          <h4 className="text-xs font-black uppercase tracking-wider text-[#0B72B9]">
            Newsletter
          </h4>

          <p className="text-xs text-[#1A2B3C]/80 font-semibold leading-relaxed">
            Subscribe to get updates about our products and offers.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full relative flex items-center mt-2"
          >

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/60 border border-[#1A2B3C]/10 rounded-full pl-4 pr-12 py-3 text-xs font-semibold text-[#1A2B3C] placeholder-[#1A2B3C]/40 outline-none focus:border-[#0B72B9] focus:bg-white transition-all duration-200"
              required
            />

            <button
              type="submit"
              className="absolute right-1.5 bg-[#0B72B9] hover:bg-[#095A94] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs shadow transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Submit newsletter subscription"
            >
              →
            </button>

          </form>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-[#0B72B9] text-white py-5 relative z-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-black tracking-widest uppercase opacity-50">

          <div className="opacity-90">
            &copy; {currentYear} Altair Food & Beverage Pvt. Ltd. All Rights
            Reserved.
          </div>

          <div className="flex items-center gap-6 text-white">

            <a
              href="#privacy"
              className="hover:text-[#C2E7FF] transition-colors duration-200 underline decoration-white/40 decoration-2 underline-offset-4 opacity-50"
            >
              Privacy Policy
            </a>

            <span className="text-white/30 font-normal">|</span>

            <a
              href="#terms"
              className="hover:text-[#C2E7FF] transition-colors duration-200 underline decoration-white/40 decoration-2 underline-offset-4 opacity-50"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}