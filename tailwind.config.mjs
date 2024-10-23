/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    spacing: {
      0: "0",
      auto: "auto",
      full: "100%",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      8: "40px",
      10: "50px",
      12: "60px",
      15: "75px",
      16: "80px",
      20: "100px",
      24: "120px",
      32: "160px",
      40: "200px",
      48: "240px",
      56: "280px",
      64: "320px",
      // You can add more values as needed
    },
    // This ensures your spacing system is consistent across all utilities
    margin: ({ theme }) => ({
      ...theme("spacing"),
    }),
    padding: ({ theme }) => ({
      ...theme("spacing"),
    }),
    width: ({ theme }) => ({
      ...theme("spacing"),
    }),
    height: ({ theme }) => ({
      ...theme("spacing"),
    }),
    gap: ({ theme }) => ({
      ...theme("spacing"),
    }),
  },
  plugins: [],
};