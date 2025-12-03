import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // keep dark class enabled
  theme: { extend: {} },
  plugins: [],
};

