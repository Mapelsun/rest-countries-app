/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // responsive column grid
        'auto': 'repeat(auto-fit, minmax(17rem, 1fr))',
      }
    },
  },
  plugins: [],
}

