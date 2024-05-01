/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "90f": "1700px",
        600: "650px",
      },
      minWidth: {
        595: "645px",
      },
      minHeight: {
        "content-box": "content-box",
      },

      scale: {
        102: "1.02",
      },
      boxShadow: {
        item: "10px 10px 25px rgba(0,0,0,0.5)",
        "3xl": "0px 10px 26px 5px rgba(43,38,209,0.64)",
        "3xlnav": "0px 10px 20px 5px rgba(0,0,0,0.5)",
      },
      fontSize: {
        aa: "0.5rem",
        ab: "0.4rem",
      },
      colors: {
        bgoverlay: "rgba(0,0,0,0.5)",
        "bg-login": "rgba(112, 128, 144, 0.7)",
      },
      width: {
        inherit: "inherit",
      },
      lineHeight: {
        liniin: "15px",
      },
      fontFamily: {
        monospace: [
          "monospace",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
        ],
      },
    },
  },
  plugins: [],
};
