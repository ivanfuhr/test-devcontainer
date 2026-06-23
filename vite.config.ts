/// <reference types="vitest/config" />
import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ mode }) => ({
  resolve: { tsconfigPaths: true },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
  ...(mode === "test"
    ? {
        define: {
          "process.env.NODE_ENV": JSON.stringify("development"),
        },
      }
    : {}),
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
}))
