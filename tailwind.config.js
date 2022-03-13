const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E6FFE6",
          200: "#00CC66",
          500: "#00CC66",
          900: "#1f9b5e",
        },
        secondary: {
          100: "#E6E6FF",
          400: "#2b295b",
          500: "#191745",
          600: "#212045",
          700: "#12122a",
          800: "#8545EA",
        },
      },
    },
  },
  plugins: [],
};
