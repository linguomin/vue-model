import { AxiosRequestConfig } from 'axios';
import auth from '@/utils/util.auth';

const requestSuccess = (request: AxiosRequestConfig): AxiosRequestConfig => {
  const TOKEN_KEY = 'accessToken';
  const accessToken = auth.getToken();

  if (accessToken) {
    request.headers = request.headers || {};
    request.headers[TOKEN_KEY] = accessToken;
  }

  return request;
};

export default requestSuccess;
