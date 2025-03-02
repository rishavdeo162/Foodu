import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure images like avif, webp are included in the build
  assetsInclude: ['**/*.avif', '**/*.webp'],
});
