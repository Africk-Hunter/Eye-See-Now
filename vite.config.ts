import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "a0935849-05ce-4fb3-8b4e-12dd4f45bb52-00-i0qpr5r0ep13.spock.replit.dev",
    ],
  },
});
