
function hourglassSum(arr) {
    let maxSum;
    for(let x=0;x<4;x++){
    for(let y=0;y<4;y++){
        let currentSum=0;
        for(let i=x;i<x+3;i++){
            for(let j=y;j<y+3;j++){
                if((i==x+1 && j == y) || (i==x+1 && j== y +2)){
                    continue;
                }
                currentSum+= arr[i][j];
            }
        }
        if(typeof(maxSum) === "undefined"){
            maxSum = currentSum;
        }else
        if(maxSum<currentSum){
            maxSum = currentSum;
        }
    }
    }
    return maxSum;
}
let arr = [	[-1,1,-1,0,0,0],
[0,-1,0,0,0,0],
[-1,-1,-1,0,0,0],
[0,-9,2,-4,-4,0],
[-7,0,0,-2,0,0],
[0,0,-1,-2,-4,0]];

hourglassSum(arr);