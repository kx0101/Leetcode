var partitionLabels = function(s) {
    let lastIndex = {};
    
    for(let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    
    let output = [];
    let start = 0;
    let end = 0;
    
    for(let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);
        if (i === end) {
            output.push(i - start + 1);
            start = i + 1;
        }
    }
    
    return output;
};
