import fetch from '@/fetch';

/**
 * 登录请求接口
 * @param param { path?: {}; query?: {}; body?: {} }
 */
export const postLogin = async (param: {
  path?: {};
  query?: {};
  body?: {};
}) => {
  try {
    const response = await fetch('xxxxurl', 'POST', param);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
