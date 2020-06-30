/**
 * 配置导航栏
 */

const navigation: Navigation[] = [
  {
    name: 'login.title',
    icon: 'el-icon-s-home',
    route: {
      path: '/Demo',
      meta: {
        module: 'Demo',
        permissionCode: ['TEST'],
      },
      children: [
        {
          name: '样例列表',
          path: 'Demo',
          meta: {
            module: 'Demo',
            permissionCode: ['TEST'],
          },
        },
      ],
    },
  },
];

export default navigation;
