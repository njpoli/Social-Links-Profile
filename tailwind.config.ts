import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: '(min-height: 720px)' },
      },
      colors: {
        'primary-green': 'hsl(75, 94%, 57%)',
        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-grey': 'hsl(0, 0%, 20%)',
        'neutral-dark-grey': 'hsl(0, 0%, 12%)',
        'neutral-off-black': 'hsl(0, 0%, 8%)',
      },
      height: {
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
      },
    },
    plugins: [],
  },
};
export default config;
