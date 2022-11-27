/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(/hero.svg)",
        "hero-image-2": "url(/hero-2.svg)",
      },
      fontFamily: {
        nerko: ["Nerko One", "cursive"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
