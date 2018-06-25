const promiseAll = iterable => {
  let promises = [];
  let count = 0;
  return new Promise((res, rej) => {
    iterable.forEach((promise, i) => {
      promise
        .then(result => {
          promises[i] = result;
          if (++count === iterable.length) {
            res(promises);
          }
        })
        .catch(err => {
          rej(err);
        });
    });
  });
};

const promiseMap = (arr, promiseReturningFunc) => {
  let promises = [];
  let count = 0;
  return new Promise((res, rej) => {
    arr.forEach((elem, i) => {
      promiseReturningFunc(elem)
        .then(result => {
          promises[i] = result;
          if (++count === arr.length) {
            res(promises);
          }
        })
        .catch(err => {
          rej(err);
        });
    });
  });
};
