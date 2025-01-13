/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        doggo: '#85522D',
        hover: '#E5E7EB',
        bg: '#31111D'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'serif'], 
      },
    },
  },
  plugins: [],
}