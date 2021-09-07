
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let currentElevation = 0;
    let arr = path.split('');
    let direction = '', valleyCount = 0;
    for(let i = 0; i<steps;i++){
        if(currentElevation === 0){
            direction = arr[i] ;
        }
        if(arr[i] === 'U'){           
            currentElevation++;
        }
         if(arr[i] === 'D'){
            currentElevation--;
        }
        
        if(currentElevation === 0){
            if(direction === 'D'){
                valleyCount++;
            }
        }
    }
    return valleyCount;
}
countingValleys(8,"UDDDUDUU");