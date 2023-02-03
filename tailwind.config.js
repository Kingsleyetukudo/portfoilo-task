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
        leftMove: "leftMove ease-in-out 15s infinite",
        rightMove: "rightMove ease-in-out 15s infinite",
        bottomMove: "bottomMove ease-in-out 15s infinite",
        topMove: "topMove ease-in-out 15s infinite",
      },

      keyframes: {
        leftMove: {
          "0%": { left: "0px", top: "0px" },
          "25%": { left: "90%", top: "0" },
          "50%": { left: "200px", top: "200px" },
          "75%": { left: "0px", top: "90%" },
          "100%": { left: "0px", top: "0px" },
        },
        rightMove: {
          "0%": { right: "0px", top: "0px" },
          "25%": { right: "90%", top: "0" },
          "50%": { right: "200px", top: "200px" },
          "75%": { right: "0px", top: "90%" },
          "100%": { right: "0px", top: "0px" },
        },

        bottomMove: {
          "0%": { right: "0px", bottom: "0px" },
          "25%": { right: "90%", bottom: "0" },
          "50%": { right: "200px", bottom: "200px" },
          "75%": { right: "0px", bottom: "90%" },
          "100%": { right: "0px", bottom: "0px" },
        },
        topMove: {
          "0%": { left: "0px", bottom: "0px" },
          "25%": { left: "90%", bottom: "0" },
          "50%": { left: "200px", bottom: "200px" },
          "75%": { left: "0px", bottom: "90%" },
          "100%": { left: "0px", bottom: "0px" },
        },
      },
    },
  },
  plugins: [],
};
