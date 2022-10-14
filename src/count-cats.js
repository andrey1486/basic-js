const { NotImplementedError } = require('../extensions/index.js');
function countCats(matrix) {
  let cats = matrix.flat().filter(item => item == '^^');
  return cats.length;
}

module.exports = {
  countCats
};