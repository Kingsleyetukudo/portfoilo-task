/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./assets/*.{html,js}"],
//   theme: {
//     extend: {
//       colors: {
//         bgcolor: "#21272F",
//       },
//     },
//   },
//   plugins: [],
// };

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
      },
    },
  },
};
