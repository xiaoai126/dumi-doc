import { defineConfig } from 'dumi';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/dumi-doc/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/dumi-doc/` : '/',
  themeConfig: {
    name: '',
  },
});
