/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262165",
        whitesmoke: "#f5f5f5",
        wheat: "#f5deb3",
      },
      animation: {
        fadeIn: "fadeIn 3s",
      },
      textShadow: {
        custom: "1px 0 10px black",
      },
    },
  },
  plugins: [],
};
