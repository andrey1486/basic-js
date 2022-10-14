const { NotImplementedError } = require('../extensions/index.js');

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
