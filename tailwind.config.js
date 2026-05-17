/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        'cormorant-sc': ['Cormorant SC', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#F5F0E8',
        'cream-dark': '#EDE8DF',
        burgundy: '#6B1F2A',
        'warm-black': '#2C2420',
        'warm-brown': '#5A4A40',
        'warm-gray': '#8A7A6A',
        border: '#D0C8BC',
        muted: '#B0A090',
      },
    },
  },
  plugins: [],
};
