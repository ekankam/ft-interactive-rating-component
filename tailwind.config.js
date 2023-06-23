/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "deep-dark-blue": "var(--deep-dark-blue)",
        "dark-blue": "var(--dark-blue)",
        "light-gray": "var(--light-gray)",
        "medium-gray": "var(--medium-gray)",
        orange: "var(--orange)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
    },
  },
  plugins: [],
};
