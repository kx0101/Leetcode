/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let charFreq = new Map();
    let used = new Set();
    let deletedCount = 0;
    
    for(let i = 0; i < s.length; i++) {
        charFreq.set(s[i], (charFreq.get(s[i]) || 0) + 1);
    }
    
    for(let [char, freq] of charFreq.entries()) {
        while (used.has(freq) && freq > 0) {
            freq--;
            deletedCount++;
        }
        used.add(freq);
    }
    
    return deletedCount;
    
};
