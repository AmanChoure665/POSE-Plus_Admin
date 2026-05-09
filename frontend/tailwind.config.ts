import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { bg: '#0f0b1f', card: '#1c1533', accent: '#8b5cf6' } } },
  plugins: []
} satisfies Config;
