module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    jest: true,
    es2021: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
