import { defineConfig, presetAttributify, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: {
          name: "Satoshi",
          provider: "fontshare"
        },
        mono: ["FiraCode", "FiraMono"],
        brand: {
          name: "Overpass"
        }
      }
    })
  ]
});
