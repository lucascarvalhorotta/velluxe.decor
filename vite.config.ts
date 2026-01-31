import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
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
          // Separa React em chunk próprio
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          
          // Separa Framer Motion (pesado!)
          'motion': ['framer-motion'],
          
          // Separa ícones
          'icons': ['lucide-react'],
          
          // Separa router se tiver
          // 'router': ['wouter'],
        },
      },
    },
    
    // Aumenta limite de warning (evita avisos desnecessários)
    chunkSizeWarningLimit: 1000,
    
    // Minificação mais agressiva
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs em produção
        drop_debugger: true,
      },
    },
    
    // Sourcemaps leves
    sourcemap: false,
    
    // CSS code splitting
    cssCodeSplit: true,
  },

  // OTIMIZAÇÕES DE SERVIDOR DEV
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },

  // OTIMIZAÇÕES GERAIS
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
    ],
  },
});
