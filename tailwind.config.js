/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#21272F",
        primary: "#00bf95",
      },

      fontFamily: {
        bodyFont: "Nunito",
      },
    },
  },
  plugins: [],
};
