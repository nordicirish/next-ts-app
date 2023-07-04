/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}',"]
  // remove unused filetypes to let tailwind faster
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [],
};
