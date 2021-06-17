const colors = require("tailwindcss/colors");

module.exports = {
  // mode: 'jit',
  // purge: ['./src/**/*.{html,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ["Ubuntu"],
      serif: ["ui-serif"],
      body: ["Ubuntu"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
