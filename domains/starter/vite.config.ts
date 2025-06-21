import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'rollup'

function tanstackVirtualModules(): Plugin {
    const virtualIds = [
        'tanstack-start-route-tree:v',
        'tanstack-start-manifest:v',
        'tanstack-start-server-fn-manifest:v',
    ]

    return {
        name: 'tanstack-virtual-modules',
        resolveId(id) {
            if (virtualIds.includes(id)) {
                // mark as resolved so Rollup stops searching on file system
                return id
            }
            return null
        },
        load(id) {
            if (virtualIds.includes(id)) {
                // Return an empty stub; nothing from these modules is required
                return 'export default {}'
            }
            return null
        },
    }
}

export default defineConfig({
    plugins: [tailwindcss(), tsconfigPaths(), tanstackStart(), tanstackVirtualModules()],
})
