const isFunction = require('lodash/isFunction');
const isEmpty = require('lodash/isEmpty');
const assign = require('lodash/assign');
const Utils = require('./utils');

/**
 * 根据指定的swagger来生成特定的api接口对象
 * @param { Function } context require-context方法返回的函数，见：https://github.com/wilsonlewis/require-context
 */
function createAllAPI(context) {
  let result = {};
  let swaggers = null;

  if (isFunction(context)) {
    swaggers = collectSwaggerInfo(context);
  }

  if (!!swaggers) {
    swaggers.forEach((swagger) => {
      if (isEmpty(swagger.path)) {
        return;
      }

      const urls = Object.keys(swagger.path); // 获取当前swagger下所有的请求路径
      const { basePath, namespace, path } = swagger;

      urls.forEach((url) => {
        result = assign(
          result,
          createAPI(
            namespace,
            basePath === '/' ? url : basePath + url,
            path[url]
          )
        );
      });
    });
  }

  if (process.env.NODE_ENV !== 'production') {
    console.warn('根据swagger生成的api对象: ', result);
  }

  return result;
}

/**
 * 提供指定的require-context来获取特定文件夹下的文件
 * @param { require-context} context require-context方法返回的函数，见：https://github.com/wilsonlewis/require-context
 * @return { namespace, bathPath, path }
 */
function collectSwaggerInfo(context) {
  let result = [];

  if (isFunction(context)) {
    context.keys().forEach(function collector(key) {
      const files = key.split('/');
      const namespace = files[files.length - 1]
        .replace(new RegExp('\\./'), '')
        .split('.')[0];

      result.push({
        namespace,
        basePath: context(key).basePath || '',
        path: context(key).paths,
      });
    });
  }

  return result;
}

/**
 * 生成API
 * @param {String} namespace 命名空间 = 文件名
 * @param { String } url
 * @param { String } info 当前url对应的信息
 */
function createAPI(namespace, url, info) {
  let api = {};
  const methods = Object.keys(info); // 获取当前api的所有 请求方法

  methods.forEach((method) => {
    const current = info[method]; // 当前方法下定义的对象
    const key = namespace + ':' + current.operationId;
    const operation = {};
    operation[key] = {
      url,
      method,
    };

    api = assign(api, operation);
  });

  return api;
}

/**
 * 将请求信息和提供的请求库的配置信息对齐
 * @param {String} url 接口路径
 * @param {String} method 请求方法
 * @param {Object} config 请求配置
 */
function defaultAdapter(url, method, config) {
  if (!isEmpty(config.path)) {
    url = Utils.formatQuery(url, config.path);
  }
  return {
    url,
    method,
    data: {
      ...config.body,
    },
    params: {
      ...config.query,
    },
    ...config,
  };
}

/**
 * 根据api接口对象和调用函数生成最后的接口函数
 * @param { Object } apis 使用createAllAPI函数生成的api接口对象
 * @param { Function } fetcher 请求函数，如axios实例
 * @param { Funciont } adapter 配置项匹配函数
 * @returns { Function }
 */
function createFetch(apis, fetcher, adapter = defaultAdapter) {
  return function fetch(
    operationId,
    config = { path: {}, body: {}, query: {} }
  ) {
    const api = apis[operationId];
    if (!api) {
      throw new Error('错误的OperationId: ' + operationId);
    }

    let { url, method } = api;

    return fetcher(adapter(url, method, config));
  };
}

module.exports = {
  createAPI,
  createAllAPI,
  createFetch,
  defaultAdapter,
  collectSwaggerInfo,
};
