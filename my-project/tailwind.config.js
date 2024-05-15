/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
       parisienne: ["parisienne", "cursive"],
      },
      colors:{
        primary: "#00c2FF",
        secondary:"#DD0BFF",
        dark:"#111111",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
          
        },
      },
    },
  },
  plugins: [],
};

