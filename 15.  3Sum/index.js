/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    
    if (nums.length < 3) {
        return nums;
    }
    
    nums = nums.sort((x, y) => x - y);
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return result;
        }
        
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            let threeSum = nums[i] + nums[k] + nums[j];
            if (threeSum === 0) {
                result.push([nums[i], nums[k], nums[j]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (threeSum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    
    return result;
};
