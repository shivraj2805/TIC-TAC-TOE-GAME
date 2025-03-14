import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/minimax-game-ai/',
  server: {
    port: 8080,   // Ensures Render detects the port
    host: true    // Allows external access (0.0.0.0)
  },
  preview: {
    port: 8080,   // Ensure preview uses the correct port
    host: true
  }
});
