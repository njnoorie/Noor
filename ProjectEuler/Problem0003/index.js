



// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//Every composite number has at least one prime factor less than or equal to square root of itself.

function findFactor(n) {
    while (true) {
        let p = smallestFactor(n);
        console.log(p);
        if (p < n)
            n /= p;
        else
            return n;
    }

}

function smallestFactor(n) {
    if (n <= 1)
        return;
    for (let i = 2, end = Math.sqrt(n); i <= end; i++) {
        if (n % i == 0)
            return i;
    }
    return n;  // n itself is prime
}

console.log(findFactor(1049129));
