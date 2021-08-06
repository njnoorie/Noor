// The sum of the squares of the first ten natural numbers is, sq(1)+sq(2)....+sq(10) = 385

// The square of the sum of the first ten natural numbers is, sq(1+ 2...+10) = sq(55)= 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is

// 3025-385 = 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


function findDiff(){
    let sumOfSquares=0, squareOfSum =0;

    for(let i = 1;i<=100;i++){
        sumOfSquares += (i*i);
        squareOfSum +=i;
    }
    squareOfSum *= squareOfSum;

    return (squareOfSum - sumOfSquares);

}

console.log(findDiff());