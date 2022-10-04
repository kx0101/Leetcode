/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        set.add(nums[i] , true);
    }
    
    let result = [];
    
    for(let i = 1; i < nums.length; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }
    
    return result;
};
