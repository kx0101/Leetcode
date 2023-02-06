/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffledArray = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        shuffledArray[2 * i] = nums[i];
        shuffledArray[2 * i + 1] = nums[n + i];
    }

    return shuffledArray;
};
