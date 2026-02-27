import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// import { defineConfig } from 'vite';

// export default defineConfig({
//   optimizeDeps: {
//     entries: ['src/main.js'], // adjust this based on your entry point
//     include: ['react', 'react-dom'], // add any core libraries here
//   },
// });
