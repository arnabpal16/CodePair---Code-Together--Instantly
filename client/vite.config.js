import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  optimizeDeps: {
    include: [
      'monaco-editor/esm/vs/editor/editor.api'
    ]
  },

  build: {
    rollupOptions: {
      external: ['monaco-editor']
    }
  },

  server: {
    
    proxy: {
      '/execute': 'http://localhost:3001',
    }
  }
})
