import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.PAGES_BASE_PATH || '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173
  },
  build: {
    target: 'es2018',
    cssMinify: true,
    minify: 'esbuild'
  }
});
