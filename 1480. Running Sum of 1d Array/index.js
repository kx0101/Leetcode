var runningSum = function(nums) {
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] + count;
        count = nums[i];
    }
  
    return nums;
};
