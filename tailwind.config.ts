import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071523',
        panel: '#0D2134',
        panel2: '#102A40',
        brand: '#2563EB',
        cyan: '#18B7C9',
        success: '#22C55E',
        paper: '#F6F8FB',
        line: '#DCE4EC',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(7, 21, 35, 0.12)',
        glow: '0 0 50px rgba(24, 183, 201, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Ethiopic', 'sans-serif'],
        display: ['Manrope', 'Noto Sans Ethiopic', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
