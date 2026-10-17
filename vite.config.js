import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 公開用CSSのバージョン：手動で更新したい場合はこの値を変更する。
const CSS_VERSION = '20261017-2'

// https://vite.dev/config/
export default defineConfig({
  base: '/sale-page/',
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        assetFileNames: (asset) => asset.names.some((name) => name.endsWith('.css'))
          ? `assets/[name]-[hash]-v${CSS_VERSION}[extname]`
          : 'assets/[name]-[hash][extname]',
      },
    },
  },
})
