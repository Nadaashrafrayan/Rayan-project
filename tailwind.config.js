/** @type {import('tailwindcss').Config} */
export default {
  // darkMode:'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0rem",
        sm: "0.0rem",
        md: "0.0rem",
      },
      center: true,
    },
    extend: {
      colors: {
        primary:"#F7B906", //yellow
        prim:"#F7B906", //yellow

        baseC: "#033E8C", //blue

        Glass: "rgba(30, 30, 30, 0.40)",
      },
      fontFamily: {
        sans: ["Abdomaster-Heavy", "sans-serif"],
      },
      backgroundImage: {
        "mid-bannner": "url('/assets/about/secBanner.jpg')",
        "first-bannner": "url('/assets/banner.png')",
    
      },
    },

    screens: {
      sm: "376px", // Small screens (phones)
      md: "868px", // Medium screens (tablets)
      lg: "1292px", // Large screens (laptops)
      // Larger screens
    },

    fontFamily: {
      Manrope: ["Abdo-Master", "sans-serif"],
    },
  },
  plugins: [],
};
