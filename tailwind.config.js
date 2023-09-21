module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  jit: true,
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        Mainback: "url('/src/assets/img/mobileSecurity.png')",
      },
      colors: {
        backcolor: "#ffd40050",
        "color-2": "#ffd40098",
        "color-3": "#00D7F2",
        maincolor: "#FFD400",
        "custom-blue": "#007aff",
      },
      fontFamily: {
        "sf-pro-text": ["SF-Pro-Text"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
