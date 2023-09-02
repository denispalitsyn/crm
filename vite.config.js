import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [require('postcss-preset-env')],
    },
  },
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, './src'),
      },
      { find: 'views', replacement: path.resolve(__dirname, './src/views') },
      {
        find: 'components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: 'services',
        replacement: path.resolve(__dirname, './src/services'),
      },
      {
        find: 'api',
        replacement: path.resolve(__dirname, './src/api'),
      },
      {
        find: 'supabaseClient',
        replacement: path.resolve(__dirname, './src/supabaseClient.ts'),
      },
      {
        find: 'types',
        replacement: path.resolve(__dirname, './src/types'),
      },
      {
        find: 'features',
        replacement: path.resolve(__dirname, './src/features'),
      },
    ],
  },
});
