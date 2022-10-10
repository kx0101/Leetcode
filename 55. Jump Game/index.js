/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, max = 0, index = 0) {
    
    while (index < nums.length) {
        const num = nums[index]
        const jumps = num + index
        
        const canNotReachEnd = max < index
        if (canNotReachEnd) return false
        
        max = Math.max(max, jumps)
        index++
    }

    return true
};
