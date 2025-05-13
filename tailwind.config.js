/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        offWhite: "#F7F7FE",
        darkGrey: "#4A4D60",
        lightGrey: "#6E728E",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        purpleGradient: "linear-gradient(180deg, #A2A7F0 0%, #696EDD 100%)",
        topImage: "url('./images/bg-top.svg')",
        bottomImage: "url('./images/bg-bottom.svg')",
      },
    },
  },
  plugins: [],
};
