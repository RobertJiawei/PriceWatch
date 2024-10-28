import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/product": {
        target: "http://localhost:5555",
        secure: "false",
      },
    },
  },
  plugins: [react()],
});
