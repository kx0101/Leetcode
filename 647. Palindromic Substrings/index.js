/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        result += countPalindromesAroundCenter(s, i, i);
        
        result += countPalindromesAroundCenter(s, i, i + 1);
    }
    
    return result;
    
    function countPalindromesAroundCenter(string, left, right) {
        let result = 0;
        
        while (left >= 0 && right < string.length) {
            if (string.charAt(left) !== string.charAt(right)) {
                break;
            }
            
            left--;
            right++;
            
            result++;
        }
        
        return result;
    }
};
