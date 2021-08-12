

function twoStrings(s1, s2) {
    // Write your code here
    let arr1, arr2;
    if (s1.length > s2.length) {
        arr1 = s2;
        arr2 = s1;
    } else {
        arr1 = s1;
        arr2 = s2;
    }
    let unique = getArray(arr1);

    for (let i = 0; i < unique.length; i++) {
        if (arr2.indexOf(unique[i]) >= 0) {
            return 'Yes';
        }
    }
    return 'No';

}

function getArray(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s.charAt(i)) === -1) {
            arr.push(s.charAt(i));
        }
    }
    return arr;
}

let m = 'coconuts',
    n = 'got';
console.log(twoStrings(m, n));