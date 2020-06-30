import zhLocale from 'element-ui/lib/locale/lang/zh-CN'; // element组件中文语言包

export default {
  ...zhLocale,
  module: '中文',
  SwitchLang: '切换语言',
  login: {
    title: '样例',
    form: {
      username: '用户名',
      password: '密码',
    },
    formRules: {
      username: '用户名不能为空',
      password: '密码不能为空',
    },
    forgot: '忘记密码？',
    btnText: '登录',
    footer: '由通用模板提供支持',
  },
};
