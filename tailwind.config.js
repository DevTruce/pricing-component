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
        blue: "#6D72DE",
        darkGray: "#4A4D60",
        lightGray: "#6E728E",
        spanishGray: "#979797",
      },

      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        purpleGradient: "linear-gradient(180deg, #A2A7F0 0%, #696EDD 100%)",
        purpleGradient50:
          "linear-gradient(180deg, rgba(162, 167, 240, 0.5) 0%, rgba(105, 110, 221, 0.5) 100%)",
        topImage: "url('./images/bg-top.svg')",
        bottomImage: "url('./images/bg-bottom.svg')",
      },
    },
  },
  plugins: [],
};
