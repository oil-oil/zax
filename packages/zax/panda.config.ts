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
        colors: {
          primary: { value: '#2563eb' },
          secondary: { value: '#eff6ff' }
        }
      },
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: 'vue'
})