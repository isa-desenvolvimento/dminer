import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  define: {
    'process.env': process.env
    // 'server.hmr.overlay': false
    // 'server.hmr': false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  proxy: {
    '/api': {
      target: 'https://www.dminerweb.com.br:8553',
      changeOrigin: true,
      secure: false,
      ws: true
    }
  }
})
