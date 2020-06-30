/**
 * @description 查找所有模块的配置文件
 */
export const getAllMetas = (function() {
  const req = (context: any) => context.keys().map(context);
  const modMetas = req(require.context('@/modules/', true, /\/meta\.ts$/))
    .filter((e: any) => e.default)
    .map((e: any) => e.default);

  return function(): CommonMeta[] {
    return modMetas;
  };
})();

/**
 * @description 根据模块名查找对应的配置文件
 * @param {String} name 模块名
 */
export const getMeta = (name: string): CommonMeta | undefined => {
  const meta = getAllMetas().find(meta => meta.name === name);
  if (meta === undefined) {
    console.warn(`Module named "${name}" not found`);
  }
  return meta;
};

/**
 * @description 获取全局路由Hooks
 */
export const getAllRouterHooks = (function() {
  const hooks: Array<{ name: string; default: any }> = [];
  const context = require.context('@/router/hooks', true, /\.ts$/);
  context.keys().forEach((name: string) => {
    hooks.push({
      name: name.split('.')[1].replace(/\//g, ''),
      default: context(name).default,
    });
  });

  return function() {
    return hooks;
  };
})();
