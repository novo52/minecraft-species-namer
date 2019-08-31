const objectsAndAdjectives = {slow: 'tarda', big: 'magnum', fast: 'rapidi', stone: 'lapi', grass: 'herba', dirt: 'lutu', item: 'res'}
const subjects = {miner: 'metallicus', crafter: 'formatus', holder: 'possessor', breaker: 'ruptor', dropper: 'dejectus', }

let args = process.argv.slice(2);
console.log(createSpeciesName([args]))

function createSpeciesName(names) {
  for (i in names) {
    let name = names[i];
    let starter = objectsAndAdjectives[name[0]];
    let ending = subjects[name[1]];
    let output = '' + starter + ending;
    if (typeof starter != 'undefined' && typeof ending != 'undefined') {
      return output;
    } else {
      return false;
    }
  }
}
