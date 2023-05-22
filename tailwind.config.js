/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'calibri': ['Calibri', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'bruno': ['Bruno Ace SC', 'cursive'],
    },
    extend: {
      screens: {
        xs: "480px",
        md: "752px",
        lg: "1030px",
      },
      colors: {
        mainColor: "#00EE00",
        ["primary-background"]: "rgba(202, 224, 252)",
        ["header-background"]: "rgb(90, 185, 216)",
        header: "#03124D",
        ["header-inactive"]: "#89899A",
        primary: "#5440af",
        ["primary-hover"]: "#1b1567",
      },
      boxShadow: {
        cardShadow:
          "1px 1px 6px 1px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        accordion: "0px 4px 144px rgba(78, 84, 200, 0.31)"
      },
    },
  },
  plugins: [],
});
