import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      spacing: {
        "calc-1": "calc((100% - 1520px) / 2)",
        "calc-2": "calc(200px - (1199px - 100vw) / 2)",
      },
      width: {
        "calc-c1-img": "calc(100vw - 64px)",
        "calc-com": "calc(100vw - 64px)",
        inherit: "inherit",
      },
      height: {
        "calc-c1-img": "calc((160 / 325) * 100vw - 30px)",
        "calc-com-img": "calc((266 / 325) * 100vw - 53px)",
      },
      colors: {
        "light-blue": "#f0f6ff",
        gray: "#676767",
        privacy: "#cfcfcf",
        black: "#111322",
        "landing-c4-to": "rgba(82, 136, 133, 0.22)",
        "contents-p": "#6b6b6b",
        "search-link-input": "#f5f5f5",
        modal: "rgba(0, 0, 0, 0.4)",
      },
      gridTemplateColumns: {
        "link-container": "repeat(auto-fill, 340px)",
      },
    },
    screens: {
      "1920px": { raw: "(min-width: 1920px)" },
      "1199px": { raw: "(max-width: 1199px)" },
      "1124px": { raw: "(max-width: 1124px)" },
      "869px": { raw: "(max-width: 869px)" },
      "767px": { raw: "(max-width: 767px)" },
      "390px": { raw: "(max-width: 390px)" },
    },
  },
  plugins: [],
};
export default config;
