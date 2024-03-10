/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ["Dancing Script"],
        HelveticaNeueeTextPro: ["Helvetica Neue eText Pro", "sans-serif"],
        SFUSouvenir: ["SFU Souvenir"],
        BTBeauSans: ["BT Beau Sans"],
        Roboto: ["Roboto"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "ct-blue": "#2B5E8A",
        "ct-brown": "#AA9259",
        "bg-layout": "#F2EEE5",
        "ct-footer": "#FFEBBB",
      },
      boxShadow: {
        header: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "item-hoi-dap": "0px 9px 14.8px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "ct-layout":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.55) 0.7%, rgba(102, 102, 102, 0.00) 100.38%)",
      },
    },
  },
  plugins: [],
}
