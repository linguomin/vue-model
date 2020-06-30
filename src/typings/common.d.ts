type RouteConfig = import('vue-router').RouteConfig;
type StoreOptions = import('vuex').StoreOptions<any>;

interface CommonMeta {
  name: string;
  route: RouteConfig[];
  store?: StoreOptions;
  code?: string; // 权限module code
}

// declare type RouteConfig = {
//   path: string; //路径
//   component?: Component;
//   name?: string; // 命名路由
//   components?: { [name: string]: Component }; // 命名视图组件
//   redirect?: string | Location | Function; //重定向
//   props?: boolean | Object | Function;
//   alias?: string | Array<string>; //别名
//   children?: Array<RouteConfig>; // 嵌套路由
//   beforeEnter?: (to: Route, from: Route, next: Function) => void;
//   meta?: any; //路由元信息 使用$route.meta.属性可以获取

//   // 2.6.0+
//   caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
//   pathToRegexpOptions?: Object; // 编译正则的选项
// }

// meta?: Partial<{
//   module: string;
//   permissionCode: Array<string>; // 允许用户查看的页面
// }>;

interface Navigation {
  icon?: string;
  name: string;
  route: RouteConfig;
}
