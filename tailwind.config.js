module.exports = {
  mode:'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-text': ['SF-Pro-Text','sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
