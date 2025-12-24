// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     proxy: {
//       '/execute': 'http://localhost:3001',
//     }
//   }
// })

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
    
    allowedHosts: [
      'ebwgh-103-188-163-178.a.free.pinggy.link',
    ],
    proxy: {
      '/execute': 'http://localhost:3001',
    }
  }
})
