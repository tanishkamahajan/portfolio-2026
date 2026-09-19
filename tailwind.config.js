/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#191818",
        subtleGrey: "#636262",
        lightGrey: "#ACACAC",
        darkText: "#3E3D3D",
        darkBorder: "#151414",
        blackText: "#111010",
        notebookWhite: "#FFF8F8",
        notebookGrey: "#D4D1D1",
        handwritingDark: "#555151",
        headingDark: "#484646",
      },
      fontFamily: {
        gochi: ["'Gochi Hand'", "cursive"],
        neue: ["'Neue Montreal'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}
