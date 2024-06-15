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
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Public Sans",
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
