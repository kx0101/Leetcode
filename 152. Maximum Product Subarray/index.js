/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let currMin = nums[0];
    let currMax = nums[0];
    let result = currMax;
    
    for(let i = 1; i < nums.length; i++) {
        
        let max = Math.max(nums[i], nums[i] * currMax,  nums[i] * currMin);
        let min = Math.min(nums[i], nums[i] * currMax, nums[i] * currMin);
        
        currMin = min;
        currMax = max;
        
        result = Math.max(result, currMax);
    }
    
    return result;
};
