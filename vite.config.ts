import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'main.ts'),
            name: 'main.ts',
            fileName: (format) => `main.${format}.js`
        },
        rollupOptions: {
            // Some libraries do not work well with Rollup and should be listed here.
            // Examples are 'gl' and 'fs'.
            external: [],
        },
        sourcemap: true,
    },
    define: {
        global: {},
    },
    optimizeDeps: {
        disabled: true,
    },
    plugins: [],
});
