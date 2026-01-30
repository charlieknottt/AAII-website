import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aaii-blue': {
          950: '#001a2e',
          900: '#003052',
          800: '#004a7c',
          700: '#0066a8',
          600: '#0082d4',
          500: '#009deb',
          400: '#33b5f5',
          300: '#66ccff',
          200: '#99ddff',
          100: '#ccf0ff',
        },
        'aaii-orange': {
          600: '#e04a16',
          500: '#ff5722',
          400: '#ff7a4d',
          300: '#ff9e7a',
          200: '#ffc4a8',
          100: '#ffe4d6',
        },
      },
    },
  },
  plugins: [],
}
export default config
