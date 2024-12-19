import { fileURLToPath } from 'url';
import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app/',
  // //base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})