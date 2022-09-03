import { build } from 'esbuild'
import progress from 'esbuild-plugin-progress'
import { esbuildPluginFileSize } from 'esbuild-plugin-filesize'
import moduleMaps from './modules.js'

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/fe-utils.js',
  treeShaking: true,
  tsconfig: 'tsconfig.json',
  plugins: [
    progress(),
    esbuildPluginFileSize({
      theme: 'dark',
      showPluginTitle: true,
      showMinifiedSize: true,
      showGzippedSize: true,
      showBrotliSize: true
    })
  ]
})

build({
  entryPoints: Object.values(moduleMaps),
  bundle: true,
  format: 'esm',
  outdir: 'dist/modules',
  treeShaking: true,
  tsconfig: 'tsconfig.json',
  plugins: [
    progress()
  ]
})
