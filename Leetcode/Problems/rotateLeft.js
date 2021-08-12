
function rotLeft(a, d) {
    // Write your code here
    let size = a.length;
    if(size === d)
        return a;
        
    let copy = JSON.parse(JSON.stringify(a));
    
    let currIndex = size-d;
    for(let i = 0;i<size;i++){
        copy[currIndex] = a[i];
        currIndex++
        if(currIndex >= size){
            currIndex = 0;
        }
    }
    return copy;
}

rotLeft([1,2,3,4,5], 4);