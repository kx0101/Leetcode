/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let freq = new Array(26).fill(0);
    let result = 1;
    
    for(let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        freq[index]++;
        
        if (freq[index] > 1) {
            result++;
            freq.fill(0);
            freq[index]++;
        }
    }
    
    return result;
    
};
