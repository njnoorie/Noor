
/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
  // Write your code here
  let mapl = {};
  let maps = {};

  if (a.length > b.length) {
    mapl = getMap(a);
    maps = getMap(b);
  } else {
    mapl = getMap(b);
    maps = getMap(a);
  }

  let del = 0;
  for (let x in maps) {
    if (mapl[x]) {
      if (mapl[x] > maps[x]) {
        mapl[x] -= maps[x];
        maps[x] = 0;
      } else {
        maps[x] -= mapl[x];
        mapl[x] = 0;
      }
    }
    del += maps[x];
  }

  for (let x in mapl) {
    del += mapl[x];
  }
  return del;
}

function getMap(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    map[str.charAt(i)] = (map[str.charAt(i)] || 0) + 1;
  }
  return map;
}

console.log(makeAnagram('cdec', 'dcf'));