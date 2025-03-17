import pkg from './package.json' with { type: "json" };

export default {
  input: 'dist/index.js',

  external: ['path', 'node-sass', 'fs', 'util', '@vanilla-extract/integration', 'rollup'],

  output: [
    {
      format: 'cjs',
      file: pkg.exports['.']?.require,
    },
    {
      format: 'es',
      file: pkg.exports['.']?.import,
    },
  ],
};
