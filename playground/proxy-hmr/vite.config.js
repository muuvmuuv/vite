import { defineConfig } from 'vite'

import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [mkcert()],
  server: {
    port: 9616,
    proxy: {
      '/anotherApp': {
        target: 'http://localhost:9617',
        ws: true,
      },
    },
  },
})
