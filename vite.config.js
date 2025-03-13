import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const htmlFiles = fs.readdirSync('./').filter(file => file.endsWith('.html'));
const inputFiles = Object.fromEntries(
  htmlFiles.map(file => [file.replace('.html', ''), path.resolve(__dirname, file)])
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputFiles,
    },
  },
});
