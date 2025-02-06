import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': import.meta.env.VITE_API_URL || 'http://localhost:5000',
    },
  },
  build: {
    outDir: '../backend/dist', // specify your desired build output directory here
    emptyOutDir: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});