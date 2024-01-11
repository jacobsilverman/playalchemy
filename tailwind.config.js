/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-rgb': 'rgb(81, 43, 153)',
      },
      fontFamily: {
        'special': ['BadScript']
      }
    },
  },
  plugins: [],
}