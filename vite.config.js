import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig ({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // For example, split React and its related libraries into their own chunk
            if (id.includes('react')) {
              return 'react-vendor';
            }
            // Split GSAP into its own chunk
            if (id.includes('gsap')) {
              return 'gsap-vendor';
            }
            // Split other large dependencies
            return 'vendor';
          }
        }
      }
    }
  }
});
