import pkg from './package.json'

export default {
  input: pkg.module,
  output: {
    file: `${pkg.main}.js`,
    format: 'cjs'
  }
}
