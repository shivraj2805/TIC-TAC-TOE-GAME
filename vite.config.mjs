import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/minimax-game-ai/', 
  server: {
    port: 10000,  // Match Render's assigned port
    host: '0.0.0.0' // Ensure external access
  },
  preview: {
    port: 10000,
    host: '0.0.0.0'
  }
});
