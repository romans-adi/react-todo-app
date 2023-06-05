import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './main.jsx',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
