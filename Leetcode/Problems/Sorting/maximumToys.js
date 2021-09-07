
function maximumToys(prices, k){
  prices.sort((a, b) => a - b);
  let sum=0,count=0;
  for(let i = 0;i<prices.length;i++){
    if(sum +prices[i]<=k){
      sum+=prices[i];
      count++;
    }else{
      break;
    }
  }
  return count;
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10],50));