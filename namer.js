const objectsAndAdjectives = {slow: 'tarda', big: 'magnum', fast: 'rapidi', stone: 'lapi', grass: 'herba', dirt: 'lutu', item: 'res'}
const subjects = {miner: 'metallicus', crafter: 'formatus', holder: 'possessor', breaker: 'ruptor', dropper: 'dejectus', }

let names = [['slow', 'miner'], ['dirt', 'holder'], ['item', 'dropper']]

for (i in names) {
  let name = names[i];
  let output = name[0] + ' ' + name[1] + ': Minecrafticus ';
  let starter = objectsAndAdjectives[name[0]];
  let ending = subjects[name[1]];
  output += '' + starter + ending;
  console.log(output);
}
