import fetch from '@/fetch';
import { API } from '@/fetch/api';

// utils
import auth from '@/utils/util.auth';
import cache from '@/utils/util.cache';

const NEED_VERIFY_CODE = '40017,40012';

/**
 * 使用账户/密码登录
 * @param loginForm { username, password, code}
 */
export const loginByUsername = async (loginForm: {
  username: string;
  password: string;
  code?: string;
}): Promise<boolean> => {
  try {
    let formData: string =
      `grant_type=password` +
      `&username=${loginForm.username.trim()}` +
      `&password=${loginForm.password.trim()}`;

    if (loginForm.code) {
      formData += `&verifycode=${loginForm.code.trim()}`;
    }

    // 调用登录接口
    const responseData: any = await fetch(
      API.Spring.getUserAccessTokenUsingPOST,
      {
        body: formData,
      }
    );

    const token = responseData.accessToken as string;
    auth.setToken(token);

    try {
      const userInfo = await getUserInfo(token);
      cache.sessionSet('userInfo', userInfo);

      return true; // 登录成功
    } catch (error) {
      throw error;
    }
  } catch (error) {
    const errorObj = {
      needVerify: false,
      errorMessage: '',
    };
    // 输出错误码
    if (NEED_VERIFY_CODE.includes(error.message)) {
      errorObj.needVerify = true;
    } else {
      errorObj.errorMessage = error.message;
    }

    return Promise.reject(errorObj);
  }
};

/**
 * 根据accessToken获取用户信息
 * @param accessToken { String }
 */
export const getUserInfo = async (
  accessToken: string = auth.getToken()
): Promise<Model.Spring.UserInfoParam> => {
  try {
    const data: Model.Spring.UserInfoParam = await fetch(
      API.Spring.getUserInfoByUsernameUsingGET,
      {
        body: {
          access_token: accessToken,
        },
      }
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * 退出登录
 * @param data { LoginInfo }
 */
export const logout = async () => {
  try {
    const response = await fetch(API.Spring.userLogoutUsingPOST, {

    });
    cache.sessionClear();
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const loginIn = async (param) => {
  try {
    const response = await fetch(API.Spring.getUserAccessTokenUsingPOST, {
      body: param
    });
    const token = response.accessToken as string;
    auth.setToken(token);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
/**
 * 获取验证码
 */
export const getVCode = async () => {
  try {
    const response = await fetch(API.Spring.getVCodeUsingGET);
    const token = response.accessToken as string;
    auth.setToken(token);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
