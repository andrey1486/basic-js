const { NotImplementedError } = require('../extensions/index.js');
function isMAC48Address(n) {
  const str = '0123456789ABCDEF';
  const coll = n.split('-').map(el => {
    if (el.length !== 2) { el = 'false'; }
    else if (str.includes(el[0]) && str.includes(el[1])) {
      el = 'true';
    } else {
      el = 'false'
    }
    return el;
  });
  return coll.includes('false') ? false : true;
}
module.exports = {
  isMAC48Address
};