module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'fp',
    '@getify/proper-ternary',
    '@typescript-eslint',
  ],
  ignorePatterns: [
    'build/**/*',
    'dist/**/*',
  ],
  globals: {
    document: true,
    window: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    extraFileExtensions: ['.vue'],
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
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
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
    'no-bitwise': ['error', { int32Hint: true }],
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
    '@getify/proper-ternary/parens': ['error', { call: false, object: false }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'vue/multi-word-component-names': ['error', {
      ignores: ['Button', 'Carousel', 'Checkbox', 'Confetti', 'Heading', 'Infobox', 'Screen', 'Stepper', 'Timeline', 'Wrapper'],
    }],
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-model': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'beside',
    }],
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: true,
    }],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': 'error',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: 1,
    }],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/prop-name-casing': 'error',
    'vue/script-setup-uses-vars': 'warn',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'CONTENT',
        'EVENTS',
      ],
    }],
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/this-in-template': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/component-tags-order': ['error', {
      order: [
        'template',
        'script',
        'style',
      ],
    }],
    'vue/v-slot-style': ['error', 'longform'],
    'vue/v-on-function-call': 'error',
    'vue/valid-v-slot': 'error',
    'vue/custom-event-name-casing': 'off',
  },
};
