/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f94f4f",
          light: "#f36e6e",
          dark: "#e31d1d",
        },
        secondary: {
          DEFAULT: "#293b5f",
          light: "#eaf1ff",
          dark: "#101e39",
        }
      },
      animation: {
        'spin-slow': 'spin 80s linear infinite',
      },
    },
  },
  plugins: [],
}