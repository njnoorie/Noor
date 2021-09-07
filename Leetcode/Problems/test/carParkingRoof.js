
function carParkingRoof(cars, k) {
    cars.sort((a, b) => a - b);
    let slabLength;
    for (let i = 0; i <= cars.length - k; i++) {
        let first = cars[i];
        let last = cars[i + k - 1];
        let slab = last - first + 1;
        if (!slabLength)
            slabLength = slab;
        else if (slab < slabLength) {
            slabLength = slab;
        }

    }
    return slabLength;
}


function decodeString(numberOfRows, encodedString) {
    let len = encodedString.length;
    let k = Math.ceil(len/numberOfRows);
    let arr = [];
    for(let i=0;i<=len-k;i=i+k){
        arr.push(encodedString.slice(i,i+k).split(''));
    }
    console.log(arr);
    let decodedStr = [];
    for(let i = 0; i<k;i++){
        //cols always start with row 0,0 1,1 2,2 3,3
        let row = 0;
        let col = row;
            while(col<k && row < numberOfRows){
                if(arr[row][col] === '_'){
                    arr[row][col] = ' ';
                }
                decodedStr.push(arr[row][col]);
                row++;
                col++
            }
        
    }
    return decodedStr.join('');
}

//console.log(carParkingRoof([2, 10, 8, 17], 3))
console.log(decodeString(3,'mnes__ya_____mi',2))
