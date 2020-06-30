const isUndefined = require("lodash/isUndefined");
const isString = require("lodash/isString");
/**
 * 将{ param } 替换为真实值
 * @param { String } raw 原始字符串
 * @param { String} param 变量名
 * @param { String | Number } value 变量值
 */
function replaceParam(raw, param, value) {
  if (typeof raw === "undefined" || raw === "") {
    return "";
  }

  const reg = new RegExp("\\{" + param + "}", "g");
  return raw.replace(reg, value.toString());
}

/**
 * 将查询语句中的placeholder替换成真实的值
 * @param queryStr { String } 查询语句
 * @param params { any | Object } 变量
 */
function formatQuery(queryStr, params = {}) {
  let raw = isUndefined(queryStr) || !isString(queryStr) ? "" : queryStr;

  if (isUndefined(params)) {
    return raw;
  }

  Object.keys(params).forEach(key => {
    raw = replaceParam(raw, key, params[key]);
  });

  return raw;
}

module.exports = {
  formatQuery,
  replaceParam
};
