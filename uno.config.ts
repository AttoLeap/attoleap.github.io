import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives
} from "unocss";

export default defineConfig({
  theme: {
    fontSize: {
      xs: "0.5rem",
      sm: "0.707rem",
      base: "1rem",
      xl: "1.414rem",
      "2xl": "1.999rem",
      "3xl": "2.827rem",
      "4xl": "3.998rem",
      "5xl": "5.653rem",
      "6xl": "7.993rem",
      "7xl": "11.302rem"
    }
  },
  presets: [
    presetUno({
      dark: "media"
    }),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Be Vietnam Pro",
        mono: "JetBrains Mono",
        brand: "Urbanist"
      }
    }),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/"
    })
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx()]
});
