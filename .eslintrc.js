module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'xo',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
        // 'plugin:import/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'pp-checker',
        'unused-imports',
        'import',
    ],
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        // https://stackoverflow.com/questions/68626276/node-must-be-provided-when-reporting-error-if-location-is-not-provided-error-with-eslint
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
        ],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'capitalized-comments': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'react/display-name': 'off',
        'no-undef': 'off',
        'pp-checker/path-checker': ['error', { alias: '@' }],
        'pp-checker/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'pp-checker/layer-imports-checker': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        // 'import/order': [
        //     'error',
        //     {
        //         pathGroups: [
        //             {
        //                 pattern: '@/**',
        //                 group: 'internal',
        //                 position: 'after',
        //             },
        //             {
        //                 pattern: './**.module.*',
        //                 group: 'internal',
        //                 position: 'after',
        //             },
        //         ],
        //         'newlines-between': 'always',
        //         alphabetize: {
        //             order: 'asc',
        //             caseInsensitive: false,
        //         },
        //     },
        // ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
