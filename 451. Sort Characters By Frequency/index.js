/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const chars = s.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    
    const sorted = Object.keys(chars).sort((x, y) => chars[y] - chars[x]);
    
    return sorted.reduce((acc, curr) => acc + curr.repeat(chars[curr]), '');
};
