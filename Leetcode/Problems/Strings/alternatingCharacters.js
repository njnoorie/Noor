

/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */


function alternatingCharacters(s) {
  // Write your code here

  let del = 0;
  let last =s.charAt(0);
  for (let i = 1; i < s.length; i++) {
    if(s.charAt(i) === last){
      del++
    }else{
      last =s.charAt(i);
    }
  }

  return del;
}


console.log(alternatingCharacters('aaaab'));