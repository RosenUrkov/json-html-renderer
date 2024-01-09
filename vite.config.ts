import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import polyfillNode from 'rollup-plugin-polyfill-node';

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
  ],
});
