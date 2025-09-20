/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#16a34a", // green-600
          accent: "#f97316"   // orange-500
        }
      }
    },
  },
  plugins: [],
}