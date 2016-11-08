const path = require('path');

export const createOfflineRequestPromise = ({dirname}) => url => {
  const filePath = path.resolve(
    __dirname,
    dirname,
    encodeURIComponent(url) + '.json'
  );
  try {
    const json = require(filePath);
    // Required JSON files will be converted into plain javascript object,
    // so we need to stringify it back to string,
    // which matches the regular behavior of request-promise.
    return Promise.resolve(JSON.stringify(json));
  } catch (err) {
    return Promise.reject('Snapshot not found');
  }
};