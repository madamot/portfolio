// eslint-disable-next-line no-undef
module.exports = {
  ignorePatterns: ['/src/generated/*', '/src/gql-generated/*'],
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'testing-library/no-node-access': 'off',
    'testing-library/no-container': ['warn'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
  },
}
