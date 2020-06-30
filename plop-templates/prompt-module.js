const { notEmpty } = require('./utils.js');

// module generator
module.exports = {
  description: 'add new module',
  prompts: [
    {
      type: 'input',
      name: 'moduleName',
      message: 'Input new module name:',
      validate: notEmpty('module name'),
    },
    {
      type: 'input',
      name: 'pageName',
      message: 'Input index page name:',
      validate: notEmpty('page name'),
    },
  ],
  actions: function(data) {
    return [
      {
        data, //用户输入的数据
        destination: 'src/modules/{{ pascalCase moduleName }}', // 新文件的根路径
        base: 'plop-templates/module', // 排除不需要添加到destination的路径
        type: 'addMany',
        templateFiles: 'plop-templates/module', // Glob 查找文件
      },
    ];
  },
};
