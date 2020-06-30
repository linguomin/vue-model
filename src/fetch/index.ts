import axiosInstance from './axios/instance';
const Utils = require('../libs/apiGenerator');

const fetch = (
  url: String,
  method: String,
  data = {
    header: {},
    path: {},
    query: {},
    body: {},
  }
) => {
  axiosInstance(Utils.defaultAdapter(url, method, data));
};

/**
 * [Swagger Parameter Types]:
 * - Path: path parameters, such as /users/{id}
 * - Body: request body, such as POST/PUT data
 * - Query: query parameters, such as /users?role=admin
 * - Header: header parameters, such as X-MyHeader: Value
 */
export default fetch as (
  url: String,
  method: String,
  data?: Partial<{
    path: object;
    body: any;
    query: object;
    header: object;
  }>
) => Promise<any>;
