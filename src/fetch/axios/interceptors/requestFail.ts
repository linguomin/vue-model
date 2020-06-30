const requestFail = (error: Error) => {
  return Promise.reject(error);
};

export default requestFail;
