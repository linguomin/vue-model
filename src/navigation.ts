/**
 * 配置导航栏
 */

const navigation: Navigation[] = [
  {
    name: 'login.title',
    icon: 'el-icon-s-home',
    route: {
      path: '/Demo/demo',
      meta: {
        module: 'Demo',
        permissionCode: ['TEST'],
      },
    },
  },
  {
    name: 'login.title',
    icon: 'el-icon-s-home',
    route: {
      path: '/Demo/demo',
      meta: {
        module: 'Demo',
        permissionCode: ['TEST'],
      },
    },
    children: [
      {
        name: 'login.title',
        icon: 'el-icon-s-home',
        route: {
          path: '/Demo/demo',
          meta: {
            module: 'Demo',
            permissionCode: ['TEST'],
          },
        },
        children: [
          {
            name: 'login.title',
            route: {
              path: '/Demo/demo/list',
              meta: {
                module: 'Demo',
                permissionCode: ['TEST'],
              },
            },
          },
        ],
      },
    ],
  },
];

export default navigation;
