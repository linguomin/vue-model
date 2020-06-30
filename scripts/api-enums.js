const requireContext = require('require-context');
const apiGenerator = require('../src/libs/apiGenerator');
const path = require('path');
const fs = require('fs-extra');

// 读取swagger的文件夹
const filePath = '../.swagger/';
const outputDir = '../src/fetch/api';

module.exports = function() {
  const context = requireContext(
    path.resolve(__dirname, filePath),
    true,
    /\.swagger\.json$/i
  );

  const swaggers = apiGenerator.collectSwaggerInfo(context);
  let enumContent = '';

  swaggers.forEach(swagger => {
    const content = generateEnumContent(swagger);
    enumContent += `\n  ${getEnumContent(content)}`;
  });

  const outputPath = path.resolve(__dirname, outputDir, 'index.ts');

  const apiEnums = `/* This file was auto-generated. Don't modify this manually. */\n
export namespace API {${enumContent}}
`;
  fs.outputFile(outputPath, apiEnums);
};

/**
 * 生成待处理的swagger内容
 * @param { swagger } swagger swagger内容
 */
function generateEnumContent(swagger) {
  const namespace = swagger.namespace;
  const operations = [];

  const paths = swagger.path;
  Object.keys(paths).forEach(key => {
    const path = paths[key];
    Object.keys(path).forEach(method => {
      const operation = path[method];
      operation.method = method;
      operation.path = key;
      operations.push(operation);
    });
  });

  return {
    namespace,
    operations,
  };
}

function removeLineBreaks(str) {
  return str && str.replace(/[\r\n]/g, '');
}

function getSchemaType(ref) {
  return ref.replace('#/definitions/', '');
}

function getParamType(param, ns) {
  return (
    param.type ||
    (param.schema
      ? param.schema.type ||
        'Model.' + ns + '.' + getSchemaType(param.schema.$ref)
      : '')
  );
}

function getEnumContent({ namespace, operations }) {
  const genParameters = (operation) => {
    return (operation.parameters || []).map(p => {
      const type = getParamType(p, namespace);
      const description = removeLineBreaks(p.description);
      const isRequired = p.required ? '(required)' : '';

      return `
     * @param {${type}} ${p.name} - [${p.in}] ${description} ${isRequired}`
    }).join('');
  }

  return `// ${namespace}
  export enum ${namespace} {${operations.map(o => {
    const description = removeLineBreaks(o.description || o.summary);
    const parameters = genParameters(o);
    const type = getParamType(o.responses['200'], namespace);
    const method = o.method.toUpperCase();

    return `
    /**
     * ${description}
     * ${parameters}
     * @return {${type}} ${type}
     * @summary ${method} ${o.path}
     */
    ${o.operationId} = '${namespace}:${o.operationId}',`
  }).join('\n')}
  }
`;
}
