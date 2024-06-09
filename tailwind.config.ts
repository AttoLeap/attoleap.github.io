import defaultTheme from 'tailwindcss/defaultTheme';
import { Config } from 'tailwindcss/types/config';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'brand-primary': '#6BF178',
        'brand-aux': '#F16BE4',
        'brand-light': '#F9FFFA',
        'brand-dark': '#0B1913'
      },
      fontFamily: {
        brand: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '9': '36px',
        '18': '72px'
      },
      height: {
        '9': '36px',
        '18': '72px'
      },
      maxHeight: {
        '9': '36px',
        '18': '72px'
      }
    },
  },
  plugins: [],
} satisfies Config

