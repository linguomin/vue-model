import VueRouter, { Route, RouteConfig } from 'vue-router';
import multiguard from 'vue-router-multiguard';
import { Store } from 'vuex';

import baseRouter from '@/router';
import baseStore from '@/store';

// utils
import { cloneDeep, isFunction, remove, isEmpty } from 'lodash';
import { getAllMetas, getAllRouterHooks } from './utils';

const KEEP_ALL_MODULE_STORE = false;

class ModuleManager {
  static instance: ModuleManager | null = null;

  // singleton
  static getInstance(): ModuleManager {
    if (ModuleManager.instance === null) {
      ModuleManager.instance = new ModuleManager();
    }

    return ModuleManager.instance;
  }

  private router: VueRouter = baseRouter;
  private store: Store<any> = baseStore;
  private modules: CommonMeta[] = [];
  private registeredModule: string[] = [];
  private moduleStateCached: { [moduleName: string]: any } = {};

  constructor() {
    this.modules = this.parseModules(getAllMetas());
    this.initRouter();
  }

  getRouter(): VueRouter {
    return this.router;
  }

  getStore(): Store<any> {
    return this.store;
  }

  /**
   * parse all modules
   * @param modules {Array<CommonMeta>}
   */
  private parseModules(modules: CommonMeta[]): CommonMeta[] {
    let temp = cloneDeep(modules);
    // this.store.registerModule('local', {});
    temp = temp.map(this.parseModuleRoute);
    temp.forEach(this.parseModuleStore);

    return temp;
  }

  /**
   * parse the module route
   * @param module {CommonMeta}
   */
  private parseModuleRoute(module: CommonMeta): CommonMeta {
    const setMetaInfo = (routes: RouteConfig[]) => {
      routes.forEach(r => {
        // put module name into each route.meta
        r.meta = r.meta || {};
        r.meta.moduleName = module.name;

        if (r.children) {
          setMetaInfo(r.children);
        }
      });
    };
    setMetaInfo(module.route);

    return module;
  }

  /**
   * parse module store and make sure module store state is independent.
   * it means every state must be a function
   * like: state() { return {...} }
   *
   * @param module {CommonMeta}
   */
  private parseModuleStore(module: CommonMeta) {
    if (!(module.store && module.store.modules)) {
      return;
    }

    const modules = module.store.modules;
    Object.keys(modules).forEach(key => {
      const curModule = modules[key];
      if (!isFunction(curModule.state)) {
        const temp = curModule.state;
        curModule.state = () => {
          return {
            ...temp,
          };
        };
      }
    });
  }

  /**
   * generate all routes and register router hooks
   */
  private initRouter() {
    // register hooks
    const hooksFn = getAllRouterHooks();
    hooksFn.forEach(fn => {
      const hook = fn.name;
      if (hook === 'beforeEach') {
        /**
         * [multiguard]:
         * first call global beforeEach(),
         * then call updateLocalStore()
         */
        this.router[hook](
          multiguard([fn.default, this.updateLocalStore.bind(this)])
        );
      } else {
        this.router[hook](fn.default);
      }
    });

    this.modules.forEach(m => {
      this.router.addRoutes(m.route);
    });
  }

  /**
   * update module store according to route's change
   * @param to {Route}
   * @param from {Route}
   * @param next {Function}
   */
  private updateLocalStore(to: Route, from: Route, next: Function) {
    const toModuleName = to.meta.moduleName;
    const toModule = toModuleName ? this.findModule(toModuleName) : null;

    const fromModuleName = from.meta.moduleName;
    const fromModule = fromModuleName ? this.findModule(fromModuleName) : null;

    if (fromModule === null && toModule) {
      this.registerModuleStore(toModule);
    } else if (toModule && fromModule) {
      if (toModule.name !== fromModule.name) {
        this.registerModuleStore(toModule);

        if (!KEEP_ALL_MODULE_STORE) {
          // keep only 1 module store
          setTimeout(() => {
            this.unregisterModuleStore(fromModule);
          }, 500);
        }
      }
    }

    next();
  }

  /**
   * find a module by its name
   * @param moduleName {string}
   */
  private findModule(moduleName: string): CommonMeta | undefined {
    if (!moduleName) {
      return;
    }
    return this.modules.find(m => m.name === moduleName);
  }

  /**
   * register the module store
   * @param module {CommonMeta}
   */
  private registerModuleStore(module: CommonMeta) {
    if (this.moduleStoreExist(module)) {
      return;
    }

    const localModules = (module.store && module.store.modules) || {};
    if (isEmpty(localModules)) {
      return;
    }

    this.store.registerModule(module.name, { namespaced: true });
    // register nested modules
    Object.keys(localModules).forEach(key => {
      const storeName = key;
      const store = localModules[key];

      this.store.registerModule([module.name, storeName], {
        ...store,
        namespaced: true,
      });
    });

    this.restoreLocalStore(module);

    this.registeredModule.push(module.name);
  }

  /**
   * unregister the module store
   * @param module {CommonMeta}
   */
  private unregisterModuleStore(module: CommonMeta) {
    if (!this.moduleStoreExist(module)) {
      return;
    }

    this.cacheLocalStore(module);
    this.store.unregisterModule(module.name);

    remove(this.registeredModule, n => n === module.name);
  }

  /**
   * check if the module store has been registered
   * @param module {CommonMeta}
   */
  private moduleStoreExist(module: CommonMeta): boolean {
    return this.registeredModule.find(n => n === module.name) !== undefined;
  }

  /**
   * store the current module's state
   * @param module {CommonMeta}
   */
  private cacheLocalStore(module: CommonMeta) {
    const clonedState = cloneDeep(this.store.state[module.name]);

    this.moduleStateCached[module.name] = clonedState;
  }

  /**
   * restore the current module's state
   * @param module {CommonMeta}
   */
  private restoreLocalStore(module: CommonMeta) {
    const cachedState = this.moduleStateCached[module.name];

    // Object.assign mutates object, so clone it first
    if (this.store.state[module.name]) {
      Object.assign(this.store.state[module.name], cloneDeep(cachedState));
    }
  }
}

export default ModuleManager.getInstance();
