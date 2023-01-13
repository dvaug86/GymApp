import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; //this comes from types/node we installed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]  
    //anytime it finds "@" it will replace it with current dirname to shorten things up ultimately
  },
});
