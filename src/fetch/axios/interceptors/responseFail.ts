const responseFail = (error: Error) => {
  return Promise.reject(error);
};

export default responseFail;
