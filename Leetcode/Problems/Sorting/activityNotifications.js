
function activityNotifications(expenditure, d){
  let notices=0;
  for(let i = d;i<expenditure.length;i++){
    let arr = expenditure.slice(i-d,i);
    let median = getMedian(arr);
    if (expenditure[i]> median * 2){
      notices++;
    }
  }
  return notices;
}
function getMedian(arr){
  arr.sort((a,b)=>a-b);
  if(arr.length%2 === 0){
    return (arr[(arr.length/2)-1] + arr[(arr.length/2)])/2;
  } else {
    return arr[Math.floor(arr.length/2)];
  }
}
console.log(activityNotifications([2,3, 4, 2, 3, 6, 8, 4, 5],5));