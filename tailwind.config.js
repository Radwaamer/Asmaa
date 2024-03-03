/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing": "url('/assets/websiteIcons/dressesBG.jpg')"
      },
      colors:{
        "gold": "#FFD700"
      },
    },
  },
  plugins: [],
};
