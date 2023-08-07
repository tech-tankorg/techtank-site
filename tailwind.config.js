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
      gradient: 'url("../public/gradient-vertical.png") ',
    },
    colors: {
      white: "#FFFFFF",
      lessWhite: "#F0F9FF",
      black: "#000",
      darkTurquoise: "#35938c",
    },
    extend: {},
  },
  plugins: [],
};
