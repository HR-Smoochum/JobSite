module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': [
      'off',
    ],
    'arrow-body-style': [
      'off',
    ],
    'max-len': [
      'off',
    ],
    'react-hooks/exhaustive-deps': [
      'off',
    ],
    'react/prop-types': [
      'off',
    ],
  },
};
