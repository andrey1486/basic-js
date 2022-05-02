const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = [];
  if (domains.length === 0) return {};
  for (let i of domains) {
    let domain = i.split('.').reverse();
    for (let item of domain) {
      if (!arr.includes(item)) {
        arr.push(item);
        console.log(arr)
      }
    }
  }
  let result = {};
  let count = new Array(arr.length);
  count.fill(0);
  for (let item of domains) {
    if (item.includes(arr[0])) {
      count[0]++;
    }
    if (item.includes(arr[0]) && item.includes(arr[1])) {
      count[1]++;
    }
    for (let i = 2; i < arr.length; i++) {
      if (item.includes(arr[0]) && item.includes(arr[1]) && item.includes(arr[i])) {
        count[i]++;
      }
    }
  }
  result[`.${arr[0]}`] = count[0];
  result[`.${arr[0]}.${arr[1]}`] = count[1];
  for (let i = 2; i < arr.length; i++) {
    result[`.${arr[0]}.${arr[1]}.${arr[i]}`] = count[i];
  }
  return result;
}

module.exports = {
  getDNSStats
};
