/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('./src/assets/lightBulb.webp')",
      }
    }
  },
  plugins: [],
}
