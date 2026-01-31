import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // OTIMIZAÇÕES DE BUILD
  build: {
    // Code splitting inteligente
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
    
    // Aumenta limite de warning
    chunkSizeWarningLimit: 1000,
    
    // Output directory
    outDir: 'dist',
    emptyOutDir: true,
    
    // Sourcemaps desabilitados pra produção
    sourcemap: false,
  },

  // OTIMIZAÇÕES DE SERVIDOR DEV
  server: {
    port: 5173,
    host: true,
  },
});