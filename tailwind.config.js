const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          //... 50 to 900
          foreground: "#F6F5FB",
          DEFAULT: "#fe3033", //CAMBIO DE COLORES
        },
        /*asi mismo se ponen todos los demas */
      },
      // .. rest of the colors
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
