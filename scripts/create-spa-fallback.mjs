import { copyFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const indexPath = join(rootDir, 'dist', 'index.html');
const fallbackPath = join(rootDir, 'dist', '404.html');

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run this script after vite build.');
}

copyFileSync(indexPath, fallbackPath);
console.log('Created dist/404.html for SPA routing fallback.');
