import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import progress from 'rollup-plugin-progress'
import filesize from 'rollup-plugin-filesize'
import modulesMaps from './modules.json'
import path from 'path'

const name = 'fe-utils'
const file = (type = 'min') => path.resolve(__dirname, `./dist/${name}.${type}.js`)

const plugins = [
  commonjs({
    include: [
      'node_modules/**',
      'node_modules/**/*',
      'dist/**/*'
    ]
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    extensions: ['.js', '.ts', '.json']
  }),
  typescript({
    tsconfig: 'tsconfig.json'
  }),
  progress(),
  filesize()
]
const bundleConfig = {
  input: 'src/index.ts',
  output: [{
    name,
    file: file('esm'),
    format: 'es',
    exports: 'auto'
  },
  {
    name,
    file: file('umd'),
    format: 'umd',
    exports: 'named'
  }],
  plugins
}
const modulesConfig = {
  input: modulesMaps,
  output: {
    name: 'modulesBundle',
    dir: path.resolve(__dirname, 'dist/modules'),
    format: 'es',
    exports: 'auto'
  },
  plugins
}

export default [
  bundleConfig,
  modulesConfig
]
