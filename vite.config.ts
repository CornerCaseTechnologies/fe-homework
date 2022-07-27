/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        presets: ['@emotion/babel-preset-css-prop'],
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
