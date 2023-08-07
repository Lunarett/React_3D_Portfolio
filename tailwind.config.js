/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //Light Theme Colors
        "ltc-1": "#edf5f7",
        "ltc-2": "#eef3f5",
        "ltc-3": "#d3dfe9",
        "ltc-4": "#e3eaef",
        "ltc-5": "#e3eaef",
        "ltc-font-1": "#2a2d2e",
        "ltc-font-2": "#414954",
        "ltc-font-3": "#2281c0",

        // Dark Theme Colors
        "dtc-1": "#061b2d",
        "dtc-2": "#061b2d",
        "dtc-3": "#061B2D",
        "dtc-4": "#092943",
        "dtc-5": "#012E59",
        "dtc-font-1": "#edf5f7",
        "dtc-font-2": "#edf5f7",
        "dtc-font-3": "#2281c0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      },
      screens: {
        xs: "1px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg1.png')",
      },
    },
  },
  plugins: [],
};