import { defineConfig, presetAttributify, presetUno, presetWebFonts, transformerCompileClass, transformerDirectives } from "unocss";
import presetAutoprefixer from 'unocss-preset-autoprefixer';

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
    presetAutoprefixer()
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives()
  ]
});
