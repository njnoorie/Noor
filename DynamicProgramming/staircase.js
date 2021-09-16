
//if we can take 1 step or 2 steps
function countNumWays(n){
    let step1 = 1,step2 = 1,temp;
    for(let i = 1; i<n;i++){
        let temp = step1 + step2;
        step1= step2;
        step2 = temp;
    }
    return step2;

}
//if we can take upto k steps
function countNumWaysk(n,k){
    let arr = [1,1];
    let numWays =1;
    for(let i = 2; i<=k;i++){
        numWays += numWays;
        arr[i]= numWays
    }
    console.log(JSON.stringify(arr));
    let j = 0;
    for(let i = k+1; i<n;i++,j++){
        numWays += numWays;
        numWays = numWays - arr[j];
        arr[i]=numWays;
    }
    console.log(JSON.stringify(arr));
    return arr[n-1];

}
console.log(countNumWaysk(4,2));