const nameLists = require('./nameLists.js');

let args = process.argv.slice(2);
console.log(createSpeciesName([args]));

function createSpeciesName(names) {
  for (i in names) {
    let name = names[i];

    let starter = nameLists.starters[name[0]];
    let ending = nameLists.endings[name[1]];
    let output = '' + starter + ending;
    if (typeof starter != 'undefined' && typeof ending != 'undefined') {
      return output;
    } else {
      return false;
    }
  }
}

module.exports = {
  createSpeciesName
}
