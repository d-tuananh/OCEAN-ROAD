/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DancingScript: ["Dancing Script"],
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
      },
      height: {
        "90dvh": "90dvh",
      },
      dropShadow: {
        cow: "0 -6mm 2mm #978f7d",
      },
    },
  },
  plugins: [],
}
