import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// CSS・商品画像・Hero画像の共通バージョン：更新時はこの値を変更する。
const ASSET_VERSION = '20261019-1'

// https://vite.dev/config/
export default defineConfig({
  base: '/sale-page/',
  plugins: [react()],
  define: {
    'import.meta.env.VITE_ASSET_VERSION': JSON.stringify(ASSET_VERSION),
  },
  build: {
    // iPhone の旧バージョンの Safari 向けの CSS 指定も保持する。
    cssTarget: 'safari14',
    rolldownOptions: {
      output: {
        assetFileNames: (asset) => asset.names.some((name) => name.endsWith('.css'))
          ? `assets/[name]-[hash]-v${ASSET_VERSION}[extname]`
          : 'assets/[name]-[hash][extname]',
      },
    },
  },
})
