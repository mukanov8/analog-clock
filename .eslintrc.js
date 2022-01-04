module.exports = {
  root: true,
  extends: 'plugin:@typescript-eslint/recommended',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': 'error',
    'no-shadow': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    semi: ['warn', 'never'],
  },
  overrides: [
    {
      files: ['*.js, *.ts'],
      rules: {
        semi: ['error', 'always'],
      },
    },
  ],
}
