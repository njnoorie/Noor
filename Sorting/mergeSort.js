const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if(array.length === 1){
    return array;
  }
  if(array.length===2){
    if(array[1]<array[0]){
      return([array[1],array[0]]);
    }else{
      return array;
    }
  }

  let mid = Math.floor(array.length/2);
  let left = array.slice(0,mid);
  let right = array.slice(mid);
    console.log('left:', JSON.stringify(left));
  console.log('right:', JSON.stringify(right));
  return merge(mergeSort(left),mergeSort(right));

}
function merge(left,right){
  let result=[];
  let i = 0,j=0;
  while(i<left.length && j < right.length){
    if(left[i]<right[j]){
      result.push(left[i]);
      i++;
    }else{
      result.push(right[j]);
      j++;
    }
  }
  result =  result.concat(left.slice(i)).concat(right.slice(j));
  console.log('merge:', JSON.stringify(result));
  return result;

}


console.log(mergeSort(numbers));
console.log(numbers);