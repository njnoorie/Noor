
function minimumBribes(q) {
    // Write your code here
    let bribes = 0;
    for(let i = 0; i<q.length;i++){
        let diff = q[i] - (i+1);
        if(diff >2){
            console.log('Too chaotic');
            return;
        }
        
        for (let j = Math.max(0, q[i] - 2); j < i; j++)
            if (q[j] > q[i]) 
            bribes++;
        
    }
            console.log(bribes);

}

minimumBribes([1,2, 5, 3, 7, 8, 6, 4]);