import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production'
    ? '/Nawan-website/'
    : '/',
   // Added this line matching your repository name
})
