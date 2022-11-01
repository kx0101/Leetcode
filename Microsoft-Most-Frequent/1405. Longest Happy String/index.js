/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let wordLength = a + b + c;
    let chars = [
        ['a', a],
        ['b', b],
        ['c', c]
    ]
    
    let result = [];
    
    while (result.length < wordLength) {
        let i = result.length;
        chars.sort(([c1, c1count], [c2, c2count]) => c2count - c1count);
        
        const char = result[i - 1] === result[i - 2] && result[i - 1] === chars[0][0] ? chars[1] : chars[0];
        
        if (char[1] === 0) break;
        result.push(char[0]);
        char[1]--;
    }
    
    return result.join('');
};
