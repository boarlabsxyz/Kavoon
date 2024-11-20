import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  eslintConfigPrettier,

  {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'next',
      'next/core-web-vitals',
      'plugin:cypress/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'cypress'],

    rules: {
      'click-events-have-key-events': 'off',
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.tsx', '.mdx'] },
      ],
      'react/jsx-one-expression-per-line': 0,
      'react/prop-types': 0,
      'jsx-a11y/click-events-have-key-events': 0, // issue 342
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'react/jsx-props-no-spreading': 0,
      'no-param-reassign': ['error', { props: false }],
      'jsx-a11y/anchor-is-valid': 0,
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'jsx-a11y/control-has-associated-label': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'import/extensions': 'off',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-promise-executor-return': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-restricted-exports': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'import/no-extraneous-dependencies': 'off',
      'global-require': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/no-unstable-nested-components': 'off',
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
    },

    overrides: [
      {
        files: ['*.mdx'],
        extends: ['plugin:mdx/recommended', 'prettier'],
        rules: {
          'react/jsx-no-undef': 'off',
          'react/self-closing-comp': 'off',
        },
        settings: {
          'mdx/code-blocks': true,
          'mdx/no-unused-expressions': true,
          'mdx/no-jsx-html-comments': false,
        },
      },
    ],
  },
];
