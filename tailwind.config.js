/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#63b3ed",
          dark: "#2563eb",
          primary: "#66a394"
        },
        dark: {
          bg: "#1f2937",
          text: "#f3f4f6",
          primary: "#2563eb",
        },
        light: {
          bg: '#f3f4f6',
          text: '#1f2937',
          primary: '#63b3ed',
        },
      }
    },
  },
  plugins: [],
}

