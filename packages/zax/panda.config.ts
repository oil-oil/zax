import { defineConfig } from "@pandacss/dev"
export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // "presets": ["@pandacss/preset-base", "@pandacss/preset-panda"],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        zIndex: {
          dialog: { value: 1000 }
        },
        opacity: {
          shadow: { value: 0.1 }
        },
        colors:{
          text:{value:'rgb(44, 62, 80)'}
        }
      },
      keyframes: {
        rebound: {
          '0%': { transform: 'scale(0.8)' },
          '40%': { transform: 'scale(1.08)' },
          '80%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' }
        },
        corner: {
          "0%": { borderRadius: "50%", transform: "rotate(0deg)" },
          "25%": { borderRadius: "50% 50% 50% 15%" },
          "50%": { borderRadius: "50% 50% 15% 30%" },
          "75%": { borderRadius: "50% 15% 30% 30%" },
          "100%": { borderRadius: "50%", transform: "rotate(-180deg)" }
        },
        point: {
          "0%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(0px, -15px)" },
          "100%": { transform: "translate(0px, 0px)" }
        },
        rotateSquare: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(180deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(180deg) rotateY(0deg)" },
          "75%": { transform: "rotateX(0deg) rotateY(180deg)" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg)" }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'vue'
})