/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'IBM Plex Sans, sans-serif'
      },
      colors: {
        primary: {
          DEFAULT: '#F28705',
          50: '#FEF3E6',
          500: '#F28705',
          600: '#DC7B05'
        },
        black: {
          DEFAULT: '#2A2A2A',
        },
        gray: {    
          10: '#1C1C1C',
          custom: '#C0C0C0'
        }
      }
    },
  },
  plugins: [],
}