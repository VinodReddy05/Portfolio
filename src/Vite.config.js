import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     host: '0.0.0.0', // Allows external access
//     port: 5173, // Default port for Vite
//   },
// });

export default defineConfig({
    server: {
      host: '0.0.0.0',
      port: 3000, // Change this to any available port (e.g., 3000, 8080, etc.)
    },
  });