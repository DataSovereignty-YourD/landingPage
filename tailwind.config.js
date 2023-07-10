module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "Mainback": "url('/src/assets/img/mobileSecurity.png')",
      },
      colors: {
        "custom-blue": "#699bf7",
      },
      fontFamily: {
        "sf-pro-text": ["SF-Pro-Text"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
