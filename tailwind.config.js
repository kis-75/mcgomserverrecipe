/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [
    require('daisyui'),
  ],

  theme: {
    extend: {
      colors: {
        "panel-gradient-from": "rgb(var(--panel-gradient-from) / <alpha-value>)",
        "panel-gradient-to": "rgb(var(--panel-gradient-to) / <alpha-value>)",
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--panel-gradient-from": "91 102 220",
          "--panel-gradient-to": "50 170 220",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "--panel-gradient-from": "18 23 84",
          "--panel-gradient-to": "7 33 44",
        },
      },
    ],
  },
};
// bg-[#5b66dc] bg-[#32a9dc] bg-[#2530ad] bg-[#186c90]
// bg-[rgb(91,102,220)] bg-[rgb(50,170,220)] bg-[rgb(18,23,84)] bg-[rgb(7,33,44)]
// bg-[hsl(235,65%,61%)] bg-[hsl(198,71%,53%)] bg-[rgb(27,35,126)] bg-[rgb(15,65,87)]