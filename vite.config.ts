/// <reference types="vitest" />

import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        header:
          'https://www.vr-challenge-header.paulodev.com.br/assets/remoteEntry.js',
        footer:
          'https://www.vr-challenge-footer.paulodev.com.br/assets/remoteEntry.js',
        cards:
          'https://www.vr-challenge-cards.paulodev.com.br/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  server: {
    port: 8000,
  },
  root: '.',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.test/setup.js'],
    include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
