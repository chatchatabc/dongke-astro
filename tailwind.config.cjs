/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        p: {
          DEFAULT: "#019c41",
          50: "#eefff4",
          100: "#d6ffe7",
          200: "#b0ffd0",
          300: "#72ffad",
          400: "#2efa81",
          500: "#03e45f",
          600: "#00bd4a",
          700: "#019c41",
          800: "#077434",
          900: "#085f2e",
          950: "#003617",
        },
        a: "#077434",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
