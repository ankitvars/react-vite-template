import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '');      // loads VITE_* vars :contentReference[oaicite:0]{index=0}
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: true,
      port: Number(env.VITE_PORT) || 3000,            // fallback to 3000 :contentReference[oaicite:1]{index=1}
      strictPort: true
    }
  };
});
