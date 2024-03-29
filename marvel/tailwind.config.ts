import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: "#F0141E"
      },
      width: {
        logo: '10%',
        searchbar:"88%",
      },
      padding:{
        navbar: "12.5px",
      },
      spacing:{
        search:"10px",
        button:"4px",
      },
    },
  },
  plugins: [],
};
export default config;
