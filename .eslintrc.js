/* eslint-disable indent */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        'jsx-a11y/label-has-associated-control': 0,
    },
};
