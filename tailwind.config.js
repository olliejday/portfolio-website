const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#080808",
      white: colors.white,
      gray: colors.warmGray,
    },
    fontFamily: {
      "display": ["Syne", "Inter", "sans-serif"],
      "sans": ["Inter", "sans-serif"],
    },
    extend: {
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%"
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            fontWeight: '500',
          },
        },
      }),
    }
  },
  variants: {
    display: ["responsive", "group-hover"],
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
