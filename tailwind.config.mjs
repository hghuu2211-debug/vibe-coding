/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Khand', 'sans-serif'],
        body: ['Switzer', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
