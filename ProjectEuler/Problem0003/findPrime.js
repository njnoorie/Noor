function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return n + " is not a prime";
        }
    }

    return n + " is a prime";

}

console.log(isPrime(4));