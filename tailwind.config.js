/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // primary electric blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          400: '#2dd4bf',  // neon teal accent
          500: '#14b8a6',
          600: '#0d9488',
        },
        surface: {
          900: '#0a0f1a',  // deepest background
          800: '#0d1526',
          700: '#111d35',
          600: '#162040',
          500: '#1e2d4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14, 165, 233, 0.05) 1px, transparent 1px)
        `,
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.18) 0%, transparent 70%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #0ea5e9 0deg, #2dd4bf 120deg, #0369a1 240deg, #0ea5e9 360deg)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
