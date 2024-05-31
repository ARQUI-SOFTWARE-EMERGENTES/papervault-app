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
        "tertiary": "#0CABA8",
        "quaternary": "#86C4BB",
        "header": "#012030",
      }
    },
  },
  plugins: [],
}

