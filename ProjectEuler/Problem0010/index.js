


// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


function findNum(n) {
let sum =0;
    for (let i = 2; i <n; i++) {
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

function isPrime(n) {

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;

}
const args = process.argv.slice(2);
//console.log(args);
console.log(findNum(args[0]));