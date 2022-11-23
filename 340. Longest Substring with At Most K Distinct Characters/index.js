/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let map = new Map();
    let left = 0;
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        map.set(c, (map.get(c) || 0) + 1);
        
        while (map.size > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            
            left++;
        }
        max = Math.max(max, i - left + 1);
    }
    
    return max;
};
