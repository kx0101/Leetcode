/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let nonDuplicate = 1;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[nonDuplicate - 1] !== nums[i]) {
            nums[nonDuplicate] = nums[i];
            nonDuplicate += 1;
        }
    }
    
    return nonDuplicate;
};
