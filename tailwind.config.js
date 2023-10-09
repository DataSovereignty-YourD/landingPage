

module.exports = { 
  mode: "jit",
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  jit: true,
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        Mainback: "url('/src/assets/img/mobileSecurity.png')",
      },
      boxShadow: {
        'all-around': '0 0 10px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        backcolor: "#ffd40050",
        "color-2": "#ffd40098",
        "color-3": "#00D7F2",
        maincolor: "#FFD400",
        "custom-blue": "#007aff",
        gray100: '#F4F4F4',
        gray150: '#e4e4e4',
        gray200: '#C4C4C4',
        gray300: '#848484',
        gray400: '#474747',
        gray500: '#171717',
        gradient1: '#1846FF',
        gradient2: '#AF00FF',
      },
      backgroundImage: theme => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.gradient1')}, ${theme('colors.gradient2')})`,
      }),
      fontFamily: {
        "pre-extrabold": ["pre-extrabold"],
        "pre-bold":["pre-bold"],
        "pre-semibold": ["pre-semibold"],
        "pre-medium": ["pre-medium"],
        "pre-regular": ["pre-regular"],
        "pre-light": ["pre-light"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
