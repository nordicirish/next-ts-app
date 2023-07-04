/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { orbitron: ["var(--font-orbitron)", "sans-serif"] },
    },
  },
  plugins: [],
};
//  remove unused filetypes to let tailwind faster
