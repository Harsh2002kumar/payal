/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1b1a1a",
          "200": "#151515",
        },
        white: "#fff",
        lightskyblue: "#53aed9",
        dimgray: "rgba(117, 106, 106, 0)",
        gainsboro: "#d9d9d9",
        aliceblue: {
          "100": "#e6f0f5",
          "200": "#e5f0f5",
        },
        darkslategray: "#072e40",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "inknut-antiqua": "'Inknut Antiqua'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
