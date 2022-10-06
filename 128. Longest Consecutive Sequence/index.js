/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set();
    
    for(let i = 0; i < nums.length; i++) {
        numSet.add(nums[i]);
    }
    
    let longestStreak = 0;
    
    for(const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num - 1;
            let currentStreak = 0;
            
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};
