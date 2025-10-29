/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-200": "#7dd3fc",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      blur: {
        "3xl": "40px",
      },
      fontFamily: {
        almarai: ["Almarai", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
