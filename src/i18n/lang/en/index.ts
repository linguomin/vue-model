import enLocale from 'element-ui/lib/locale/lang/en'; // element组件英语语言包

export default {
  ...enLocale,
  module: 'English',
  SwitchLang: 'Switch language',
  login: {
    title: 'Sample',
    form: {
      username: 'Username',
      password: 'Password',
    },
    formRules: {
      username: 'Username can not be empty',
      password: 'Password can not be empty',
    },
    forgot: 'Forget?',
    btnText: 'LOGIN',
    footer: 'Powered by common model',
  },
};
