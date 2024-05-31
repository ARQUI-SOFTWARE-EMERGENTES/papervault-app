/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6CD6FC",
        "secondary": "#13678A",

        "header": "#012030",
      }
    },
  },
  plugins: [],
}

