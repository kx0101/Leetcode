/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let curr = 0;
    
    while (curr <= right) {
        if (nums[curr] === 0) {
            let temp = nums[left];
            nums[left++] = nums[curr];
            nums[curr++] = temp;
            
        } else if (nums[curr] === 2) {
            let temp = nums[curr];
            nums[curr] = nums[right];
            nums[right--] = temp;
            
        } else {
            curr++;
        }
    }
};
