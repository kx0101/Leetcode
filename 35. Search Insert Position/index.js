O(log n) solution is a must

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left  + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } 
        if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    if (target <= nums[left]) {
        return left;
    } else {
        return left + 1;
    }
}
