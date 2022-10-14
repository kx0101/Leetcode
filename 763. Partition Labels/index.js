/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let lastIndex = {};
    
    for(let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    
    let output = [];
    let size = 0;
    let end = 0;
    
    for(let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);
        size++;
        
        if (i === end) {
            output.push(size);
            size = 0;
        }
    }
    
    return output;
};
