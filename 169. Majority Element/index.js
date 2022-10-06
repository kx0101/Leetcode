/**
 * @param {number[]} nums
 * @return {number}
 */
 
 // Boyer-Moore Voting Algorithm
 
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    
    for(const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};
