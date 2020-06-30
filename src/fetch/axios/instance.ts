import axios, { AxiosInstance } from 'axios';

import axiosDefaultConfig from './config';
// interceptors
import requestSuccess from './interceptors/requestSuccess';
import requestFail from './interceptors/requestFail';
import responseSuccess from './interceptors/responseSuccess';
import responseFail from './interceptors/responseFail';

const instance: AxiosInstance = axios.create({ ...axiosDefaultConfig });

instance.interceptors.request.use(requestSuccess, requestFail);
instance.interceptors.response.use(responseSuccess, responseFail);

export default instance;
