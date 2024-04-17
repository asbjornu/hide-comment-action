// @ts-check
// https://typescript-eslint.io/getting-started/typed-linting/

import js from '@eslint/js';
import ts from 'typescript-eslint';
import jest from 'eslint-plugin-jest';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    files: ['tests/**'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules
    },
  },
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
      },
    },
  },
  {
    ignores: ['src/generated/*.ts'],
  },
  {
    files: ['*.js'],
    ...ts.configs.disableTypeChecked,
  }
);
