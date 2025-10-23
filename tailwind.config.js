/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-200": "#7dd3fc",
      },
      blur: {
        "3xl": "40px",
      },
    },
  },
  plugins: [],
};
