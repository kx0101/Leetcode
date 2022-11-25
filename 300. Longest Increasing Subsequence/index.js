/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    
    let tails = [];
    tails[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] < tails[0]) {
            tails[0] = nums[i];
        } else if (nums[i] > tails[tails.length - 1]) {
            tails.push(nums[i]);
        } else {
            let l = 0;
            let r = tails.length - 1;
            
            while (l < r) {
                let mid = Math.floor((l + r) / 2);
                
                if (tails[mid] >= nums[i]) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            tails[r] = nums[i];
        }
    }
    
    return tails.length;
};
