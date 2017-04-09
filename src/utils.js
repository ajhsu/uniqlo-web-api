// 1 .. 22
export const range = start =>
  count => [...Array(count).keys()].map(n => n + start);
export const jsonify = text => JSON.parse(text);
export const thenable = val => Promise.resolve(val);
export const log = val => {
  console.log(val);
  return Promise.resolve(val);
};
