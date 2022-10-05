/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    
    let result = [];
    
    for(let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            result.push(i);
        }
    }
    
    return result;
    
};
