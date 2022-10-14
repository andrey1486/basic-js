const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !parseFloat(sampleActivity) 
      || sampleActivity > 15 || sampleActivity <= 0) {
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (Math.LN2 / HALF_LIFE_PERIOD));
  }
}

module.exports = {
  dateSample
};
 