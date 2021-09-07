
/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
  // Write your code here

  let map = getMap(s);
  let cnt, waiver = 0;
  for (let x in map) {
    if (!cnt) {
      cnt = map[x];
    } else {
      if (cnt > map[x]) {
        if (cnt - 1 === map[x]) {
          waiver++;
          cnt = map[x]
        } else {
          return 'NO';
        }
      } else if (cnt < map[x]) {
        if (cnt + 1 === map[x]) {
          waiver++;
        } else {
          return 'NO';
        }
      }
      if (waiver > 1) {
        return 'NO';
      }
    }
  }

  return 'YES';
}

function getMap(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    map[str.charAt(i)] = (map[str.charAt(i)] || 0) + 1;
  }
  return map;
}

console.log(isValid('aabbcd'));