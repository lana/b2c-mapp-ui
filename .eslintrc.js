module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: ['fp'],
  ignorePatterns: [
    'build/**/*',
    'dist/**/*',
  ],
  globals: {
    document: true,
    window: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/*.spec.{j,t}s?(x)',
        '**/*.test.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'no-console': 1,
    'no-extra-boolean-cast': 0,
    'max-params': ['error', 3],
    'arrow-parens': 'error',
    'consistent-return': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'func-names': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'max-len': 'off',
    semi: ['error', 'always'],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: 'never',
    }],
    'no-plusplus': 'off',
    'require-await': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/group-exports': 'error',
    'import/exports-last': 'error',
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
    }],
    'fp/no-class': 'error',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    // TODO JASON: Add more Vue-specific rules here (such as formatting markup) as needed, and look into porting over any old react ones here
  },
};
