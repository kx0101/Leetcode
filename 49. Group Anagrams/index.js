/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for(let str of strs) {
        let charCount = new Array(26).fill(0);
        for(let c of str) {
            charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        
        if (!map[charCount]) {
            map[charCount] = [];
        }
        map[charCount].push(str);
    }
    
    return Object.values(map);
};
