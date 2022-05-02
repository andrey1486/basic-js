const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members) || !Array.from(members)) {
    return false;
  }
  for (let name of members) {
    if (typeof name !== 'string') {
      continue;
    } else {
      teamName.push(name.trim()[0]);
    }
  }
  return teamName.map(item => item.toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};
