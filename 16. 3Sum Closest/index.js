/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let diff = Infinity;

    nums = nums.sort((x, y) => x - y);

    for(let i = 0; i < nums.length && diff !== 0; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    } 

    return target - diff;
};
