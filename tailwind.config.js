/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#edf5f7",
        secondary: "#414954",
        tertiary: "#d3dfe9",
        "eBlue": "#15a3e6",
        "font-color-1": "#5f6365",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg1.png')",
        "layer1": "url('/src/assets/bg/bg1_layer0.png')",
        "layer2": "url('/src/assets/bg/bg1_layer1.png')",
        "layer3": "url('/src/assets/bg/bg1_layer2.png')",
        "layer4": "url('/src/assets/bg/bg1_layer3.png')",
      },
    },
  },
  plugins: [],
};