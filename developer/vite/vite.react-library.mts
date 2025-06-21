/// <reference types="vite/client" />

import * as vite from 'vite'
import path from 'path'

// Plugins
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default vite.defineConfig({
    plugins: [
        viteTsconfigPaths(),
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve('./src/index.ts'),
            name: `${process.env.PACKAGE_NAME} library`,
            formats: ['es', 'umd'],
            fileName: (format) => `${process.env.PACKAGE_NAME}.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                },
            },
        },
    },
})
