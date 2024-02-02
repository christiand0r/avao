/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "indigo-dye": "#134C6C",
        bone: "#e2dace",
        gunmetal: "#152534",
        gray: "#7a7a7a",
        seasalt: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
