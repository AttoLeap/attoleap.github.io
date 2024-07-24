import { fontFamily as ff } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...ff.sans]
    },
    extend: {}
  },
  plugins: []
};
