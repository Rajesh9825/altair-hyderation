/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkNavy: '#1A2B3C',    // Base headings & deep text
          primaryBlue: '#0B72B9', // CTAs, primary active states
          skyBlue: '#C2E7FF',    // Light accents, soft cards
          iceBackground: '#F4F9FC' // Clean off-white section blocks
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}