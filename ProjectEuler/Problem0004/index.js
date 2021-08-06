


// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function palindrome(n) {
    let pall=-1,num1,num2;
    for (let i = 999; i > 99; i--) {
        for (let j = i; j > 99; j--) {
            let num = i * j;
            if(isPall(num) && num > pall){
               pall = num;
               num1 =i; num2 =j;
            }

        }
    }
    console.log(`${num1} ${num2} ${pall}`);
    return pall;

}
function isPall(n) {
    let a = n.toString().split('');
    for (let i = 0, j = a.length - 1; a.length > 2 && i < j; i++, j--) {
        if (a[i] !== a[j])
            return false;
    }
    return true;
}
console.log(palindrome());
