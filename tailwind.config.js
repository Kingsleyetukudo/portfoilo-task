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

      animation: {
        wiggle: "wiggle 10s infinite",
      },

      keyframes: {
        wiggle: {
          0: { left: "0", top: "0" },
          "25%": { left: "300px", top: "0" },
        },
      },
    },
  },
  plugins: [],
};
