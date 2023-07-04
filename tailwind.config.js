/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      //overwrite default sans fault
      fontFamily: {
        sans: ["var(--font-exo2)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
//  remove unused filetypes to let tailwind faster
