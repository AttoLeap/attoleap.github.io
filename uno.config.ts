import {
  defineConfig,
  presetAttributify,
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
        sans: "Urbanist",
        mono: "JetBrains Mono",
        brand: "Urbanist"
      }
    })
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx()]
});
