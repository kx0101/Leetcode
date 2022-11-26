/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let map = new Map();
    let maxLength = 0;
    
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i] - difference) || 0) + 1);
        maxLength = Math.max(maxLength, map.get(arr[i]));
    }
    
    return maxLength;
};
