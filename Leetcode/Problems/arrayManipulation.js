
function arrayManipulation(n,queries) {
    let obj={};
    for(let i =0; i<queries.length;i++){
        let a = queries[i][0],
        b=queries[i][1],
        k=queries[i][2];

        for(let j=a;j<=b;j++){
            obj[j] = (obj[j]||0) + k;

        }
    }
    return Object.values(obj).reduce((a,b)=> Math.max(a,b));

}

function arrayManipulation1(n,queries) {
    let arr= new Array(n);
    for(let i =0; i<queries.length;i++){
        let a = queries[i][0],
        b=queries[i][1],
        k=queries[i][2];

        arr[a-1] = (arr[a-1]||0) + k;
        arr[b] = (arr[b] || 0) - k;

    }
    
  var current = 0,max=0;
  for (var i = 0; i < arr.length; i++) {
    current += (arr[i] || 0);
    if (current > max) {
      max = current;
    }
  }

  console.log(max);

}
console.log(arrayManipulation1(10,[[1,5,3],[4,8,7],[6,9,1]]));