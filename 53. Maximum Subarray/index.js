/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSubArray = nums[0];
    let maxSubArray = nums[0];
    
    for(let i = 1 ; i < nums.length; i++) {
        currentSubArray = Math.max(nums[i], currentSubArray + nums[i]);
        maxSubArray = Math.max(currentSubArray, maxSubArray);
    }
    
    return maxSubArray;
};
