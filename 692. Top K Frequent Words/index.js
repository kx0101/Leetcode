/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map();
    let output = [];
    words.sort();

    for(let word of words) {
      map.set(word, (map.get(word) || 0) + 1);
    }
    
    map = new Map([...map].sort((a, b) => b[1] - a[1]));
    
    for(let [key] of map) {
        if (output.length >= k) break;
        output.push(key);
    }
    return output;
};
