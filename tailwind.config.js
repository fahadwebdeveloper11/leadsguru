/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('./src/assets/hero-banner-img-1.png')",
        'courses-sec-img' : "url('./src/assets/banner-1.png')"
      },
      boxShadow:{
        'card-shadow': "rgb(100 100 111 / 20%) 0px 7px 29px 0px"
      }
    }
  },
  plugins: [],
}

