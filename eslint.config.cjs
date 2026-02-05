const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const playwright = require('eslint-plugin-playwright');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'allure-results/**',
      'allure-report/**',
      'test-results/**',
      'dist/**',
      'eslint.config.cjs',
    ],
  },

  {
    files: ['**/*.cjs', '**/*.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],
    plugins: { playwright },
    rules: { ...playwright.configs.recommended.rules },
  },

  prettier,
];
