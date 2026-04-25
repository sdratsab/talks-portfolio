
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#1a1a1a',
        accent: '#f4a0a8',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', '"Space Mono"', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}
