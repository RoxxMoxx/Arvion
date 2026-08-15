import type { Config } from 'tailwindcss';

// Arvion design system tokens.
// Palette avoids generic "AI gradient purple" clichés in favor of a
// premium, restrained enterprise look: deep ink, warm off-white, and a
// single confident accent (amber-forward "signal" color) used sparingly.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          1000: '#07080A',
          950: '#0B0D10',
          900: '#111417',
          800: '#1B1F24',
          700: '#2A2F36',
          500: '#5B636E',
          300: '#9BA3AD',
        },
        paper: {
          50: '#FAF9F6',
          100: '#F3F1EC',
          200: '#E9E6DE',
        },
        signal: {
          500: '#C97B2E', // muted amber/copper accent, not a neon gradient
          600: '#A8621F',
          400: '#DDA35F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,13,16,0.04), 0 8px 24px rgba(11,13,16,0.06)',
        glow: '0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
