/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm cream palette: 50 = lightest (page bg), 900 = deepest (primary text)
        cream: {
          DEFAULT: '#fbf6ea',
          50: '#fdf9ee',
          100: '#f6efdc',
          200: '#ecdfc2',
          300: '#d6c39d',
          400: '#a99c7e',
          500: '#7d715b',
          600: '#5a4f3d',
          700: '#3d3527',
          800: '#251f15',
          900: '#1b160e',
        },
        // Primary accent — vivid sunset coral. Warm, optimistic, confident.
        coral: {
          DEFAULT: '#df5a37',
          dim: '#b9482a',
        },
        // Secondary warm accent — sun-yellow for occasional moments
        sun: '#e8a64a',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'mono-xs': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        'mono-sm': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'fluid-sm': ['clamp(0.875rem, 0.85rem + 0.1vw, 0.95rem)', { lineHeight: '1.6' }],
        'fluid-base': ['clamp(1rem, 0.95rem + 0.2vw, 1.125rem)', { lineHeight: '1.65' }],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.5vw, 1.375rem)', { lineHeight: '1.5' }],
        'fluid-xl': ['clamp(1.5rem, 1.2rem + 1.2vw, 2rem)', { lineHeight: '1.2' }],
        'fluid-2xl': ['clamp(2rem, 1.5rem + 2vw, 3rem)', { lineHeight: '1.05' }],
        'fluid-3xl': ['clamp(2.75rem, 1.8rem + 4vw, 5rem)', { lineHeight: '0.98' }],
        'fluid-display': ['clamp(3.5rem, 2rem + 7vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        readable: '62ch',
      },
    },
  },
  plugins: [],
};
