module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'oclif'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};
