

function countTriplets(arr, r) {
    let triplets = 0;
    let twos = {};
    let threes = {};
    for (let i = 0; i < arr.length; i++) {
        if (threes[arr[i]]) {
            triplets+=threes[arr[i]];
        }
        if (twos[arr[i]]) {
            threes[arr[i] * r] = (threes[arr[i] * r] ||0) + twos[arr[i]];
        }
        twos[arr[i] * r] = (twos[arr[i] * r]||0) + 1;
    }
    return triplets;

}

//Brute Force
function countTriplets1(arr, r) {
    let triplets = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let num1 = arr[i], num2 = arr[j], num3 = arr[k];
                if (num1 * r === num2 && num2 * r === num3) {
                    triplets++;
                }
            }
        }
    }
    return triplets;

}

let m = [1, 3, 9, 9, 27, 81];
console.log(countTriplets(m, 3));
