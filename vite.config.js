import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './Index.html'),
        about: resolve(__dirname, './About.html'),
        contacts: resolve(__dirname, './Connect.html'),
        portfolio: resolve(__dirname, './Projects.html'),
      }
    }
  }
})