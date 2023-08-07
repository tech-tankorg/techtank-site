/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'url("../public/gradient-vertical.png") ',
      },
      screens: {
        lg: { max: "1280px" },
        md: { max: "890px" },
        sm: { max: "760px" },
        xs: { max: "414px" },
      },
      colors: {
        white: "#FFFFFF",
        lessWhite: "#F0F9FF",
        black: "#000",
        darkTurquoise: "#35938c",
      },
      borderRadius: {
          'custom': '1% 75px',
        },
    }
  },
  plugins: [],
};
