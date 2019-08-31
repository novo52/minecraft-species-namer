const nameLists = require('./nameLists.js');

let args = process.argv.slice(2);
console.log(createSpeciesName(args));

function createSpeciesName(name) {
  if (typeof name == 'string') {
    name = name.split(' ');
  }

  if (typeof name != 'object' || name.length > 2) return TypeError('Invalid args');

  let starter = nameLists.starters[name[0]];
  let ending = nameLists.endings[name[1]];
  let output = '' + starter + ending;
  if (typeof starter != 'undefined' && typeof ending != 'undefined') {
    return output;
  } else {
    return Error('No translation found');
  }
}

module.exports = {
  createSpeciesName
}
