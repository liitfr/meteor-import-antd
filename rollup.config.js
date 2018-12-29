const globby = require('globby');

const configs = globby.sync('src/*.js').map(inputFile => ({
  input: inputFile,
  output: {
    file: inputFile.replace('src/', ''),
    format: 'cjs',
    interop: false,
    compact: true,
  }
}));

export default configs;