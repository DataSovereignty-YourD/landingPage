module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        Mainback: "url('/src/assets/img/mobileSecurity.png')",
      },
      colors: {
        "color-1": "#699BF7",
        "color-2": "#00BCFF",
        "color-3": "#00D7F2",
        "custom-blue": "#699BF7",
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
