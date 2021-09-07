function repeatedString(s, n) {
    // no. of a's in s
    let cnt = (s.match(/a/g) || []).length;
    if (cnt === 0 || n <= 0) {
        return 0;
    }


    let repititions = Math.floor(n / s.length);
    let occurences = cnt * repititions;
    if (n % s.length > 0) {
        let end = s.substring(0, n % s.length);
        occurences += (end.match(/a/) || []).length;
    }

    return occurences;


}

function repeatedString1(s, n) {
    let count = (s.match(/a/g) || []).length,
        countInRest = 0,
        restOfStringLength = n % s.length;

    if (count === 0 || n <= 0) {
        return 0;
    }
    if (restOfStringLength > 0) {
        let restOfString = s.substring(0, restOfStringLength);
        countInRest = (restOfString.match(/a/) || []).length;
    }

    return ((n - restOfStringLength) / s.length * count) + countInRest;
}

console.log(repeatedString1('aba', 10));