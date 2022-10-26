/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    dfs(nums, [], new Array(nums.length).fill(false), result);
    return result;
    
    function dfs(nums, path, used, result) {
        if (path.length === nums.length) {
            // deep copy otherwise we'll append the same list over and over
            result.push(Array.from(path));
            return;
        }
        
        for(let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            path.push(nums[i]);
            used[i] = true;
            
            dfs(nums, path, used, result);
            
            path.pop();
            used[i] = false;
        }
    }
};
