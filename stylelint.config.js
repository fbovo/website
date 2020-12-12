module.exports = {
  syntax: 'scss',
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-lost',
  ],
  // https://stylelint.io/user-guide/configuration
  rules: {
    'unicode-bom': 'never',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['lost'],
      },
    ],
  },
}
