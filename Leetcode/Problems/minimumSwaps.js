
function minimumSwaps(q) {
    let swaps=0;
    for(let i = 0;i<q.length-1;i++){
        if(q[i]===i+1){
            continue;
        }
        for(let j=i+1;j<q.length;j++){
            if(q[j] === i+1){
              q[j] = q[i];
              q[i] = i+1;
              swaps++;
              break;
            }
        }
    }
    return swaps;

}

minimumSwaps([1,3,5,2,4,7,6]);