import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

const htmlFiles = fs.readdirSync('./').filter(file => file.endsWith('.html'));
const inputFiles = Object.fromEntries(
    htmlFiles.map(file => [file.replace('.html', ''), path.resolve(__dirname, file)])
);

export default defineConfig({
    build: {
        // minify: false,
        minify: 'terser', // Enables Terser minification
        sourcemap: false, // Disables source maps for smaller output
        rollupOptions: {
            input: inputFiles,
            output: {
                entryFileNames: '[name].[hash].js', // Uses hashed filenames
                chunkFileNames: '[name].[hash].js',
                assetFileNames: '[name].[ext]',
                format: 'es',
                compact: false, // Compacts output for minification
                generatedCode: 'es2015'
            }
        }
    },
    esbuild: {
        minify: true, // Ensures esbuild minifies as well
        legalComments: 'none', // Removes unnecessary comments
        keepNames: false // Allows mangling of function and variable names
    },
    server: {
        watch: {
            ignored: [] // Prevent ignoring public directory
        },
        hmr: {
            overlay: false // Prevents HMR errors from breaking reload
        }
    },
    plugins: [
        {
            name: 'watch-public',
            configureServer(server) {
                server.watcher.add(path.resolve(__dirname, 'public'));
                server.watcher.on('change', file => {
                    if (file.includes('public')) {
                        server.ws.send({ type: 'full-reload', path: '*' });
                    }
                });
            }
        }
    ]
});
