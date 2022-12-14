# react+ts+tailwindCss 樣板
## 讓專案擁有自動import 功能
```javascript
npm i -D unplugin-auto-import

//vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports:['react', 'react-router-dom'],
      dts:'src/auto-imports.d.ts'
    })
  ],
})
```
