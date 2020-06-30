const { notEmpty } = require('./utils.js');

// page generator
module.exports = {
  description: 'add new page',
  prompts: [
    {
      type: 'input',
      name: 'pageName',
      message: 'Input new page name:',
      validate: notEmpty('page name'),
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'Input existed module name:',
      validate: notEmpty('module name'),
    },
  ],
  actions: function(data) {
    return [
      {
        data,
        destination: 'src/modules/{{ pascalCase moduleName }}/pages',
        base: 'plop-templates/module/pages',
        type: 'addMany',
        templateFiles: 'plop-templates/module/pages',
      },
      {
        type: 'modify',
        path: 'src/modules/{{ pascalCase moduleName }}/route.ts',
        pattern: '];',
        template: `
          {
            path: '/{{ pascalCase moduleName }}/{{ kebabCase pageName }}',
            name: '{{ kebabCase moduleName }}-{{ kebabCase pageName }}',
            component: () => import('./pages/{{ pascalCase pageName }}/index.vue'),
          },
        ];`,
      },
    ];
  },
};
