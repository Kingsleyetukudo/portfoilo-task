/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#21272F",
        borderColor: "#00bd95",
      },

      fontFamily: {
        bodyFont: "Nunito",
      },
    },
  },
  plugins: [],
};
