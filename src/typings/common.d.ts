type RouteConfig = import('vue-router').RouteConfig;
type StoreOptions = import('vuex').StoreOptions<any>;

interface CommonMeta {
  name: string;
  route: RouteConfig[];
  store?: StoreOptions;
  code?: string; // 权限module code
}

interface Navigation {
  name: string;
  icon?: string;
  route: RouteConfig;
  children?: Navigation[];
}
