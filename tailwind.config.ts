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
        primary: { DEFAULT: '#0066FF', hover: '#0052CC', light: '#3385FF' },
        accent:  { DEFAULT: '#00D4FF', dark: '#00AACC' },
        dark:    { DEFAULT: '#1A1A2E', 700: '#2D2D44', 600: '#3D3D5C', 500: '#5A5A7A' },
        surface: { DEFAULT: '#F5F7FA', 2: '#EEF1F6' },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Arial Narrow', 'sans-serif'],
        body:    ['Barlow', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'partner-scroll': 'partnerScroll 42s linear infinite',
        'shine':          'shine 3.5s ease-in-out infinite',
        'fade-up':        'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        partnerScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%':   { left: '-75%' },
          '30%':  { left: '125%' },
          '100%': { left: '125%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
