module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    camelcase: 2, // 强制驼峰法命名
    eqeqeq: 2, // 必须使用全等
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'arrow-spacing': 0, // =>的前/后括号
    'func-names': 0,
    indent: [2],
    'no-undef': 1,
    'no-var': 0,
    'vars-on-top': 2, // var必须放在作用域顶部
    'one-var': 1,
    'newline-after-var': 2,
    'spaced-comment': 1,
    'eol-last': 0,
    'no-console': 'off'
  }
}
