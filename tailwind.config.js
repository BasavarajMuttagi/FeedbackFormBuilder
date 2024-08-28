/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Background.png')",
      },
      colors: {
        "copper-gold": "#cfa27c",
      },
    },
  },
  plugins: [],
};
