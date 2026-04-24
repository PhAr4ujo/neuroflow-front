import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
const port = Number(process.env.VITE_PORT ?? 5174)
const usePolling = process.env.CHOKIDAR_USEPOLLING === 'true'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: process.env.VITE_HOST ?? 'localhost',
    port,
    strictPort: true,
    watch: usePolling
      ? {
          usePolling: true,
          interval: Number(process.env.CHOKIDAR_INTERVAL ?? 300),
        }
      : undefined,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
