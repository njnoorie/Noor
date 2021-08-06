




// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//try dividing numbers >=2520 by 1-20

function SmallestNumber(n) {
    let number = 2520;
    while (true) {
        let foundNumber = true;
        for (let i = 2; i <= 20; i++) {
            if (number % i !== 0) {
                foundNumber = false;
                break;
            }
        }
        if(foundNumber){
            return number;
        }else{
            number++;
        }
    }

}
console.log(SmallestNumber());
