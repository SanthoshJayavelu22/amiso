/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: '#00b2e3',
      },
      fontFamily: {
        sans: ['"Sans"', 'Arial', 'sans-serif'], 
      },
      screens: {
        laptop: '1280px', 
      },



      
    },
  },
  plugins: [],
}