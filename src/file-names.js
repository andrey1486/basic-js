const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let arr = [];
  for (let item of names) {
    let i = names.shift();
    arr.push(i);
    if (names.includes(i)) {
      let count = 0;
      for (let j = 0; j < names.length; j++) {
        if (names[j] === i) {
          count++;
          names[j] = `${names[j]}(${count})`;
          console.log(names[j])
        }
      }
    }
  }
  console.log(names)
  return arr.concat(names);
}

module.exports = {
  renameFiles
};
