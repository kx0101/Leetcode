/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let charMap = {}
    for(let char of t) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    let left = 0;
    let right = -1;
    let countNeeded = Object.keys(charMap).length;
    let res = "";
    
    while (right <= s.length) {
        if (countNeeded === 0) {
            if (!res || res.length > right - left) {
                res = s.slice(left, right + 1)
            }
            
            const leftChar = s[left];
            if (leftChar in charMap) charMap[leftChar]++;
            if (charMap[leftChar] === 1) {
                countNeeded++;
            }
            left++;
        } else {
            right++;
            const rightChar = s[right];
            if (rightChar in charMap) charMap[rightChar]--;
            if (charMap[rightChar] === 0) countNeeded--;
        }
    }
    
    return res;
};
