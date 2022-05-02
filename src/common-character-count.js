const { NotImplementedError } = require('../extensions/index.js');
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      if (arr.includes(s1[i])) {
        continue;
      } else {
        arr.push(s1[i]);
        console.log(arr)
        let min = Math.min(s1.split('').filter(item => item === s1[i]).length, s2.split('').filter(item => item === s1[i]).length);
        console.log(min)
        count += min;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
