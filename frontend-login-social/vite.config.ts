import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const port = Number(process.env.FRONT_PORT) || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: port },
  plugins: [react()],
})
