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
        sans: "Urbanist",
        mono: "JetBrains Mono",
        brand: "Urbanist"
      }
    }),
    presetIcons()
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx()]
});
