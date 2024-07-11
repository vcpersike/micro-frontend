import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'root-app',
      filename: 'root-app-entry.js',
      remotes: {
        microFront01: 'http://localhost:3001/assets/remoteEntry.js',
        microFront02: 'http://localhost:3002/assets/remoteEntry.js',
        microFront03: 'http://localhost:3003/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
