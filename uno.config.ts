import { defineConfig, presetUno, presetWebFonts, transformerCompileClass, transformerDirectives } from "unocss";
import presetAutoprefixer from 'unocss-preset-autoprefixer';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Urbanist",
        mono: "JetBrains Mono",
        brand: "Urbanist"
      }
    }),
    presetAutoprefixer()
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass()
  ]
});
