/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'kec-blue': '#243c5a',
      },

      padding: {
        '45px': '45vh',
      }
    },
  },
  plugins: [],
}
