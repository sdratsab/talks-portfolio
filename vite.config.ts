import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change the name below to match your repository name exactly
  base: '/talks-portfolio/', 
})
