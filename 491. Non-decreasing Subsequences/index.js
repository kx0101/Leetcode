/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let result = [];

    function dfs(i, sub) {
        let uniqueSubs = new Set();

        for (let j = i; j < nums.length; j++) {
            if (uniqueSubs.has(nums[j]) || sub.length > 0 && sub[sub.length - 1] > nums[j]) continue;

            uniqueSubs.add(nums[j]);
            sub.push(nums[j]);

            if (sub.length >= 2) {
                result.push([...sub]);
            }
            
            dfs(j + 1, sub);
            sub.pop();
        }
    }

    dfs(0, []);
    return result;
};
