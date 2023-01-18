/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let [globalMax, globalMin] = [nums[0], nums[0]];
  let [currMax, currMin] = [0, 0];
  let total = 0;

  for (let n of nums) {
    currMax = Math.max(currMax + n, n);
    currMin = Math.min(currMin + n, n);
    total += n;

    globalMax = Math.max(globalMax, currMax);
    globalMin = Math.min(globalMin, currMin);
  }

  return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;

};
