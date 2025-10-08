import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import { resolve } from 'path'

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
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': true,
          },
        }),
        ...(process.env.NODE_ENV === 'production' ? [cssnano()] : []),
      ],
    },
  },
})
