/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (!nums || nums.length < 2) {
        return nums;
    }
    let j = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            j++;
            let t = nums[j]; 
                nums[j] = nums[i];
                nums[i] = t;
        }

    }
    return nums;

};

console.log(moveZeroes([1, 0]));

// i   j   arr
// 0   

