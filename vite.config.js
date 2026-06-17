import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  plugins: [
    {
      name: 'serve-config-and-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve config files
          if (req.url.startsWith('/config/')) {
            const filePath = path.join(__dirname, req.url.split('?')[0]);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'application/json');
              res.end(fs.readFileSync(filePath));
              return;
            }
          }
          // Serve assets files
          if (req.url.startsWith('/assets/')) {
            const filePath = path.join(__dirname, req.url.split('?')[0]);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              let mime = 'application/octet-stream';
              if (ext === '.jpg' || ext === '.jpeg') mime = 'image/jpeg';
              else if (ext === '.png') mime = 'image/png';
              else if (ext === '.svg') mime = 'image/svg+xml';
              else if (ext === '.pdf') mime = 'application/pdf';
              
              res.setHeader('Content-Type', mime);
              res.end(fs.readFileSync(filePath));
              return;
            }
          }
          next();
        });
      }
    }
  ]
});
