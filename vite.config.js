import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(), 
    svgr(),
  ],
  server: {
    host: '127.0.0.1',
    port: 5173,
    hmr: false,
    proxy: {
      '/api': {
        target: 'https://meow-center.ru/',
        changeOrigin: true,
      },
      '/media': {
        target: 'https://meow-center.ru/',
        changeOrigin: true,
      },
    }
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  }
})