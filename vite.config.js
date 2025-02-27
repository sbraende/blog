import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "/src/html/pages/about.html"),

        beatsSolo: resolve(__dirname, "/src/html/blogposts/beats-solo.html"),
        componentsViewer: resolve(__dirname, "/src/html/blogposts/components-viewer.html"),
        game2048: resolve(__dirname, "/src/html/blogposts/game-2048.html"),
        jspeech: resolve(__dirname, "/src/html/blogposts/j-speech.html"),
        norwayQuiz: resolve(__dirname, "/src/html/blogposts/norway-quiz.html"),
        stabakFotball: resolve(__dirname, "/src/html/blogposts/stabak-fotball.html"),
      },
    },
  },
});
