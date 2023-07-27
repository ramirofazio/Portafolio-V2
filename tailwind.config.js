const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      base: "#0a192f",
      primary: "#59c6ba",
      secondary: "#8892b0",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
    },
    extend: {
      backgroundImage: {
        background: "url('./src/assets/background.svg')",
      },
      fontFamily: {
        title: ["Permanent Marker", "cursive"],
        secondary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
