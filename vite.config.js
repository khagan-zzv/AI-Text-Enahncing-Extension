import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'src/content.js',
            output: {
                entryFileNames: 'content.js', // bundled name
            }
        },
        outDir: 'dist',
        emptyOutDir: true,
        target: 'esnext'
    }
});
