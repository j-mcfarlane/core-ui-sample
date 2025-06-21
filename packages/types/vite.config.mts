import { defineConfig, mergeConfig } from 'vite'

// Config
import baseConfig from '../../developer/vite/vite.react-library.mjs'

export default mergeConfig(baseConfig, defineConfig({}))
