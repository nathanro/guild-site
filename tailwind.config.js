/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#08080C',
        surface: '#0E0E14',
        'surface-2': '#13131B',
        primary: '#8B8BF5',
        'primary-dark': '#6D6DE8',
        accent: '#C4B5FD',
        dark: '#08080C',
        'dark-light': '#0E0E14',
        cream: '#EDEDF2',
        muted: '#9B9BA8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};
