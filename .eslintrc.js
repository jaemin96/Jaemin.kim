module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
    'prettier',
    // 'plugin:react/recommended'
    // 'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/strict',
    // 'plugin:testing-library/react',
  ],
  overrides: [
    // {
    //   files: [],
    //   env: {},
    // },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'import',
    '@typescript-eslint',
    // "react"
    // 'react-hooks',
    // 'jsx-a11y',
  ],
  settings: {
    // # react version을 자동으로 탐지 - 최신 버전
    // react: {
    //   version: 'detect',
    // },
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        tabWidth: 2,
        quoteProps: 'as-needed',
        printWidth: 120,
        htmlWhitespaceSensitivity: 'css',
      },
    ],
  },
};
