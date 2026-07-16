import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.GITHUB_ACTIONS ? '/RohanReddyYalam.github.io/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 4173,
  },
});
