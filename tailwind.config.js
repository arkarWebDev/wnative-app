/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        orange: "#FF6442",
        skyBlue: "#45BBFC",
        purpleDark: "#182233",
        secondaryDark: "#93A1B9",
      },
    },
  },
  plugins: [],
};
