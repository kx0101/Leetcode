/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let result = 0;
    let left = 0;
    let max = 0;
    let count = {};
    
    for(let right = 0; right < s.length; right++) {
        count[s[right]] = count[s[right]] ? count[s[right]] + 1 : 1;
        
        max = Math.max(max, count[s[right]]);
        
        while(right - left + 1 - max > k) {
            count[s[left]]--;
            left++;
        } 
        
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};
