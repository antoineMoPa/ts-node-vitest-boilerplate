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
    },
    optimizeDeps: {
        disabled: true,
    },
    plugins: [],
});
