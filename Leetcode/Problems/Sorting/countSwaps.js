
function countSwaps(a) {
  let swaps = 0;
  for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        let t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
        swaps++;
      }
    }

  }
  console.log('Array is sorted in ' + swaps + ' swaps.');
  console.log('First Element: ' + a[0]);
  console.log('Last Element: ' + a[a.length - 1]);

}
console.log(countSwaps([1, 5, 3, 4, 8, 7, 6, 9, 2]));