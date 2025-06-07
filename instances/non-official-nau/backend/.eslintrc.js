module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-restricted-imports': ['error', {
      patterns: [
        {
          group: ['@/api/*/*', '!@/api/index.ts'], // Disallow anything deeper than one level in api, but how to allow ONLY index.ts?
          message: "Please import from '@/api/index.ts' only."
        },
        {
          group: ['@/shared/*/*', '!@/shared/index.ts'], // Similar issue for shared
          message: "Please import from '@/shared/index.ts' only."
        }
      ]
    }]
  },
};
