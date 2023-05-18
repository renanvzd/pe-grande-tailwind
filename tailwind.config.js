/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'bruno': ['Bruno Ace SC', 'cursive'],
    },
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        mainColor: "#00EE00",
        ["primary-background"]: "#131820",
        slogan: "rgb(18, 156, 5)",
        boxSubpage: "rgb(7, 33, 16);",
        primary: "#5440af",
        ["primary-hover"]: "#1b1567",
        secondary: "#e9db8b",
        tertiary: "#ef8d65",
        ["tertiary-hover"]: "#ff7034",
        quarternary: "#ed6c65",
        "lp-bluegray": "#F5F4FF",
        "lp-bluedark": "#2F2868"
      },
      boxShadow: {
        cardShadow:
          "1px 1px 6px 1px rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        accordion: "0px 4px 144px rgba(78, 84, 200, 0.31)"
      },
    },
  },
  plugins: [],
};
