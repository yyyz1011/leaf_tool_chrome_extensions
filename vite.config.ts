import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import webExtension from '@samrum/vite-plugin-web-extension';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { resolve } from 'path';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import manifest from './src/manifest';

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  console.log(mode, command);
  return defineConfig({
    root: './src/',
    base: './',
    envDir: '../',
    publicDir: '../public',
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()]
      }),
      webExtension({
        manifest: {
          ...manifest
        }
      })
    ],
    define: {
      'process.env': {}
    },
    server: {
      host: '0.0.0.0',
      port: 30,
      strictPort: true,
      open: true
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/global.scss" as *;'
        }
      }
    },
    rollupOptions: {
      plugins: [nodePolyfills()]
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      cssCodeSplit: true,
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, './src/index.html')
        },
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/name-[hash].[ext]'
        },
        manualChunks: {
          overview: [
            './src/views/overview/Overview.vue',
            './src/views/overview/OverviewSearch.vue',
            './src/views/tool/FormatHump.vue',
            './src/views/tool/FormatUnderline.vue',
            './src/views/tool/FormatLowerCase.vue',
            './src/views/tool/FormatUpperCase.vue'
          ]
        }
      }
    }
  });
};
