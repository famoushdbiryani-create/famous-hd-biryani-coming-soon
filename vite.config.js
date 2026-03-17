import { defineConfig } from 'vite'

export default defineConfig({
  // Base configuration for Vite
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
})
