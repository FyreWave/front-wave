const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      red: colors.red,

      slate: colors.slate,
      gray: colors.gray,

      primary: {
        100: "#E6FFE6",

        500: "#00CC66",

        900: "#0E9F0E",
      },

      secondary: {
        100: "#E6E6FF",
        500: "#191745",
        600: "#212045",
        900: "#0E0E9F",
      },
    },
    extend: {},
  },
  plugins: [],
};
