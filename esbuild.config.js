import { build } from 'esbuild'
import progress from 'esbuild-plugin-progress'
import { esbuildPluginFileSize } from 'esbuild-plugin-filesize'
import moduleMaps from './modules.js'

;(async () => {
  await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'esm',
    outfile: 'dist/index.esm.js',
    treeShaking: true,
    tsconfig: 'tsconfig.json',
    plugins: [
      progress(),
      esbuildPluginFileSize()
    ]
  })

  await build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'cjs',
    outfile: 'dist/index.cjs.js',
    treeShaking: true,
    tsconfig: 'tsconfig.json',
    plugins: [
      progress(),
      esbuildPluginFileSize()
    ]
  })

  await build({
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
})()

