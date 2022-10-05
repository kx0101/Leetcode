/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let left = 0;
    let result = 0;
    
    for(let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[left])
            left += 1;
        }
        charSet.add(s[r]);
        result = Math.max(result, r - left + 1);
    }
    
    return result;
};
