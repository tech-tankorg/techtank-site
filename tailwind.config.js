/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      gradient: 'url("../public/gradient.png") ',
    },
    colors: {
      white: "#FFFFFF",
      lessWhite: "#F0F9FF",
    },
    extend: {}
  },
  plugins: [],
};
