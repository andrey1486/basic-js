const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = `${n}`.split('');
  const k = arr.length;
  let newN = [];
  for (let i = 0; i < k; i++) {
    arr = `${n}`.split('');
    arr.splice(i, 1);
    newN.push(arr.join(''));
  }
  return Math.max(...newN);
}

module.exports = {
  deleteDigit
};
