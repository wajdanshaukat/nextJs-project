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
        geistMono: ["var(--font-geist-mono)", "monospace"],
        almarai: ["Almarai", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
       
      },
    },
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
