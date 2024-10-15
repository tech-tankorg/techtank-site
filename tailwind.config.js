/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "890px" },
      sm: { max: "760px" },
      xs: { max: "414px" },
      xs: { max: "375px" },
    },
    extend: {
      backgroundImage: {
        gradient: 'url("../public/gradient-vertical.png") ',
      },
      colors: {
        white: "#FFFFFF",
        lessWhite: "#F0F9FF",
        black: "#000",
        darkTurquoise: "#35938c",
      },
      borderRadius: {
        custom: "1% 75px",
      },
      animation: {
        scroll: "scroll 60s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
    },
  },
  plugins: [],
};
