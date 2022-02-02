module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
  },
};
