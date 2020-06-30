import { AxiosResponse } from 'axios';
import { Message } from 'element-ui';
import router from '@/router/index';
import auth from '@/utils/util.auth';
import cache from '@/utils/util.cache';
import code from '@/configs/code';

/**
 * 响应拦截
 * @param response { AxiosResponse }
 * 操作成功，返回 data.data
 * 操作失败，抛出 Error: data.errorMsg
 */
const responseSuccess = (response: AxiosResponse) => {
  const errorCode = response.data.errorCode.toString();

  // 返回响应数据
  if (errorCode === code.success) {
    return response.data.data;
  } else {
    // 不返回错误信息提示
    if (
      code.hasOwnProperty('no_msg') &&
      code.no_msg.length &&
      code.no_msg.includes(errorCode)
    ) {
      return;
    }

    // 返回错误码
    if (
      code.hasOwnProperty('return_code') &&
      code.return_code.length &&
      code.return_code.includes(errorCode)
    ) {
      return errorCode;
    }

    // 在弹框下的逻辑将会有弹框提示
    Message({
      message: response.data.errorMsg,
      type: 'error',
    });

    // 跳转到登录页
    if (
      code.hasOwnProperty('to_login') &&
      code.to_login.length &&
      code.to_login.includes(errorCode)
    ) {
      router.push({ name: 'auth-login' });
      cache.sessionClear();
      auth.removeToken();
      return;
    }

    // 跳转到登录页
    if (code.hasOwnProperty('to_any') && code.to_any.length) {
      code.to_any.forEach((item) => {
        if (item.code.includes(errorCode)) {
          router.push({ name: item.to_name, params: item.to_params });
        }
      });
      return;
    }

    // 控制台返回具体错误信息
    throw new Error(response.data.errorMsg);
  }
};

export default responseSuccess;
