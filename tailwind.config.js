module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black_-1": "#0A0A0D",
        black: "#141522",
        black_1: "#41424D",
        black_2: "#9A9BA1",
        black_3: "#DADADD",
        "blue_-1": "#2B4CDE",
        blue: "#3357FA",
        blue_1: "#4D72FE",
        blue_2: "#9AACFF",
        blue_3: "#C8D2FF",
        white_1: "#FFFFFF",
        white: "#FCFCFC",
        "white_-1": "#F6F6F6",
        "green_-1": "#0DB56F",
        green: "#00C775",
        green_1: "#14D199",
        green_2: "#66E1BC",
        green_3: "#9EECD4",
        "yellow_-1": "#ECA438",
        yellow: "#FEBA54",
        yellow_1: "#FFCB7C",
        yellow_2: "#FFDEAC",
        yellow_3: "#FFE9C8",
        "red_-1": "#E43530",
        red: "#FF3C36",
        red_1: "#FE5F5A",
        red_2: "#FE9A97",
        red_3: "#FECCCA",
        "grey_-1": "#CACACF",
        grey: "#DBDADF",
        grey_1: "#E5E4E8",
        grey_2: "#EBEBEE",
        grey_3: "#EFEFF1",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        sans: ['General Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
