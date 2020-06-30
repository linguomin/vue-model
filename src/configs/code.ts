/**
 * 该文件主要用来配置请求接口返回的code
 * 如果有添加新的key 需要到@/fetch/axios/responseSuccess.ts进行添加相应逻辑
 * 目前只有当前key的逻辑,如无特殊情况，请勿要修改responseSuccess.ts逻辑
 * 如果不需要某个key 比如 return_code:[]
 */
export default {
  // 成功的code码
  success: '0',
  // 不要返回错误信息的code码,不做任何处理
  no_msg: ['401001', '401003', '10001'],
  // 跳转到登录页面的code码
  to_login: ['401003', '401001'],
  // 返回错误码的code码
  return_code: ['401006', '401007', '401008', '401010', '400001'],
  // 跳转到其他页面的code码
  to_any: [
    {
      code: ['132', '106'],
      to_name: 'dataset-list',
      to_params: {}, // ?可传可不传
    },
  ],
};
