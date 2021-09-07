/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(typeof s === "undefined"){
        return 0;
    }
    if(s.length <2){
        return s.length;
    }
  let longest = 0, left = 0, right = 0;
    let map = new Set();
    
    
    for(; right<s.length;right++){  //O(n)
        
          while(map.has(s[right])){
              map.delete(s[left]);
              left++;              
          }
            
            map.add(s[right]);
            longest=Math.max(longest,right-left + 1);
    }
    
    return longest;
    
};

console.log(lengthOfLongestSubstring("abcbdf"));