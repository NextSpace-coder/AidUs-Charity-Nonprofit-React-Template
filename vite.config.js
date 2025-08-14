import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTagger from 'vite-tagger'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        include: "**/*.{jsx,js}",
      }),
      viteTagger({ prefixName: "wb" }),
    ],
    server: {
      host: "::",
      port: 8080,
      allowedHosts: true,
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.[tj]sx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
  }
})