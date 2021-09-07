var twoSum = function(nums, target) {
    //how big can be nums?
    //errohandling, what should be done in case of invalid input?
    
    //brute force
    //looping nums through it slenght and a nexted loop to loop from the next
    // O(n^2)
    
    let map = {};
    for(let i = 0; i<=nums.length-1;i++){
        let complement = target - nums[i];
        console.log(complement);
        if(map[nums[i]] !== undefined){
            return [i, map[nums[i]]];
        } else {
            map[complement] = i;
        }
        console.log(map);
        
    }
    
};
console.log(twoSum([3,2,4], 6));