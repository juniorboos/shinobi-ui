module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   settings: {
      react: {
         version: 'detect',
      },
      'import/resolver': {
         typescript: {
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            project: 'packages/*/tsconfig.json',
         },
      },
   },
   env: {
      browser: true,
      amd: true,
      node: true,
      jest: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'plugin:storybook/recommended',
   ],
   plugins: ['simple-import-sort', 'prettier'],
   rules: {
      'prettier/prettier': [
         'error',
         {},
         {
            usePrettierrc: true,
         },
      ],
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/accessible-emoji': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'jsx-a11y/anchor-is-valid': [
         'error',
         {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
         },
      ],
   },
};
