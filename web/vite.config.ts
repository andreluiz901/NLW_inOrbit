import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['dayjs/locale/pt-br'],
    },
  },
  resolve: {
    alias: {
      'dayjs/locale/pt-br': 'dayjs/locale/pt-br.js',
    },
  },
})
