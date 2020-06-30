import { AxiosRequestConfig } from 'axios';

const axiosDefaultConfig: AxiosRequestConfig = {
  timeout: 1000 * 60,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '-1',
    language: 'en',
  },
  withCredentials: true,
};

export default axiosDefaultConfig;
