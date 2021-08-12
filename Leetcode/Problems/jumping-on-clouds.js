
function jumpingOnClouds(c) {
    // Write your code here
    let jump = 0,i=0;
    while(i<c.length-1){
        if(i+2<c.length && c[i+2]!== 1){
            jump++;
            i+=2;
        }else 
        if(i+1<c.length && c[i+1]!== 1){
            jump++;
            i++;
        }
        
    }
    
    return jump;

}

jumpingOnClouds([0,0,0,0,1,0])