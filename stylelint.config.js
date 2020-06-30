/**
 * https://stylelint.io/user-guide/rules
 *
 */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard'],
  rules: {
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [/^\/deep\/.*$/]
      }
    ],
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: [/^selector.*$/]
      }
    ],
    // 为了保持结构，.vue文件对应的空scss文件不用检测
    'no-empty-source': null,
    'no-descending-specificity': [true, { severity: 'warning' }]
  }
};
