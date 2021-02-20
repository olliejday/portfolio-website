module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": ["Inter\\ Var", "Inter", "sans-serif"],
      "mono": ["ui-monospace", "SFMono-Regular", "monospace"]
    },
    extend: {
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%"
      }
    }
  },
  variants: {
    display: ["responsive", "group-hover"],
    extend: {}
  },
  plugins: []
}
