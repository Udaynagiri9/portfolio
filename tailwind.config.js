/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070708',
        'surface-dark': '#0f1013',
        'surface-card': '#15161b',
        'surface-light': '#f4f3ef',
        'text-muted': '#8e929a',
        accent: {
          blue: '#3b82f6',
          cyan: '#38bdf8',
          silver: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Syne"', '"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
