import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    entries: ['index.html'],
  },
  server: {
    port: 5173,
    hmr: {
      clientPort: 5173,
    },
  },
})
