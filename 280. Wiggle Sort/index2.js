/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let less = true;
    
    for(let i = 0; i < nums.length - 1; i++) {
        if (less) {
            if (nums[i] > nums[i + 1]) {
                swap(nums, i, i + 1);
            }
        } else {
            if (nums[i] < nums[i + 1]) {
                swap(nums, i, i + 1);
            }
        }
        
        less = !less;
    }
    
    function swap(nums, i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};
