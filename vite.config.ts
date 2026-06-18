import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // 개발 서버를 3000번 포트에서 실행
  },
  // 모듈 경로 별칭 설정
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' }, // @components -> /src/components
      { find: '@', replacement: '/src' }, // @ -> /src
    ],
  },
})
