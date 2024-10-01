import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import environmentPlugin from 'vite-plugin-environment';
import checkerPlugin from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    environmentPlugin('all', { prefix: 'REACT_APP_' }),
    checkerPlugin({
      typescript: true,
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'build',
  },
});
