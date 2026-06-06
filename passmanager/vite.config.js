import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // change

export default defineConfig({
  plugins: [react(), tailwindcss()],    // change
}) 