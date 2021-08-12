

function sherlockAndAnagrams(s) {
    // Write your code here
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let str = s.charAt(i);
        arr.push(str);
        for (let j = i + 1; j < s.length; j++) {
            str += s.charAt(j);
            arr.push(sort(str));
        }
    }
    let count = 0
    for (let i = 0; i < arr.length; i++) {
            let matches = arr.filter((x,index) => x === arr[i] && index > i);
            if (matches.length > 0) {
                count += matches.length ;
            }
    }
    return count;

}

function sort(s) {
    let arr = s.split('');
    return arr.sort().join('');

}
let m = 'coconuts',
    n = 'kkkk';
//console.log(sherlockAndAnagrams(n));

let list = [4, 5, 6];
let obj = {a:5,b:7,c:9};

for (let i in obj) {
   console.log(i); // "0", "1", "2",
                //a b c
}

for (let i of obj) {
   console.log(i); // "4", "5", "6"
   //error
}