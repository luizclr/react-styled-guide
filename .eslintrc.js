module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'error',
    'import/export': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    quotes: ['error', 'double'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'max-lines-per-function': ['error', { max: 120 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'sibling', 'unknown'],
      },
    ],
  },
};
