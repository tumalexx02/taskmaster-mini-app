/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {gridTemplateColumns: {
      'calendar': 'repeat(7, minmax(0, 2rem))',
    }},
  },
  plugins: [],
}

