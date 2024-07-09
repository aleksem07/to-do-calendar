import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.join(__dirname, "styles")],
        additionalData: `
          @import "/src/styles/default_variables.scss";
          @import "/src/styles/mixins.scss";
          @import "/src/styles/fonts.scss";
        `,
      },
    },
  },
});
