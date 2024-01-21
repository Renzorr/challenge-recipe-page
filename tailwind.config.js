/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        young: ["Young Serif"],
        sans: ["Outfit"]
      },
      screens: {
        mobile: { max: "670px" }
      },
      fontSize: {
        "2xl": ["clamp(36px,4cqw,40px)"],
        xl: ["clamp(24px,4cqw,28px)"],
        lg: ["clamp(18px,4cqw,20px)"]
      },
      colors: {
        nutmeg: "#854632",
        "dark-raspberry": "#7b284f",
        "rose-white": "#fff5fa",
        eggshell: "#f3e6d8",
        "light-grey": "#e4ded8",
        "wenge-brown": "#5f574e",
        "dark-charcoal": "#302d2c"
      },
      gridTemplateColumns: {
        custom: "minmax(150px, 305px) minmax(150px, 300px)"
      },
    },
  },
  plugins: [],
};
