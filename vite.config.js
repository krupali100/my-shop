import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({

  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Shop',
        short_name: 'My Shop',
        description: "It's online shopping",
        theme_color: '#ffffff',
        background_color:"#239b56",
        display:"fullscreen",
        start_url:"/my-shop/",
        icons: [
          {
            src: '/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox:{
        runtimeCaching:[
          {
            usePattern:/^https:\/\/krupali100\.github\.io\/my-shop\/.*/,
            handler:"NetworkFirst",
          }
        ]
      }
    })
  ],
    base:'/my-shop/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
 
});