/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    
    function quickSelect(left, right) {
        let pivot = nums[right];
        let p = left;
        
        for(let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                let temp = nums[p];
                nums[p] = nums[i];
                nums[i] = temp;
                p++;
            }
        }
        let temp = nums[p];
        nums[p] = nums[right];
        nums[right] = temp;
        
        if (p > k) return quickSelect(left, p - 1);
        if (p < k) return quickSelect(p + 1, right);
        else       return nums[p];

    }
    
    return quickSelect(0, nums.length - 1);
};
