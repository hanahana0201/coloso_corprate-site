/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        'gutter-x': 'max(2.5vw,1rem)',
        'gutter-y-0.5': 'max(1.25vw,1rem)',
      },
    },
  },
  plugins: [],
};
