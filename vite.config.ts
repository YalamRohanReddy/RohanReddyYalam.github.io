import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use a relative base for production builds so assets resolve correctly
// when deployed to GitHub Pages (project pages) regardless of repo path.
const base = process.env.NODE_ENV === 'production' ? './' : '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 4173,
  },
});
