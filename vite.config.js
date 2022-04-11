import {defineConfig} from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
  plugins: [preact()],
})
