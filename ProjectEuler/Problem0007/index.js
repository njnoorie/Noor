

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?



function findPrime() {

    let currentNumber = 2, currentPrime = 2, primeCount = 0;
    while (primeCount < 10001) {
        if (isPrime(currentNumber)) {
            primeCount++;
            currentPrime = currentNumber;
        }
        currentNumber++;

    }
    return (currentPrime);

}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(findPrime());