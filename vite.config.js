import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Dev server config (proxy)
  server: {
    proxy: {
      '/users': 'https://travelapp-project-back-end.onrender.com'
    }
  },

  // Vitest config
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.js"
  }
})
