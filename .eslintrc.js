module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error', { 'accessibility': 'no-public' }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'max-classes-per-file': 'off',
    'no-console': 0,
    'no-duplicate-imports': 'error',
    'no-empty': 0,
    'no-shadow': 'off',
    'comma-dangle': 'off',
    'sort-keys': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { "vars": "all", "args": "all"}],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  ignorePatterns: [
    'src/migrations/*.ts'
  ]
};
