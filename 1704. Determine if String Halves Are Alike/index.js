/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = 'aeiouAEIOU';
    let n = s.length;
    
    let firstCounter = 0;
    let secondCounter = 0;
    
    for(let i = 0; i < n / 2; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            firstCounter++;
        }
    }
    
    for(let i = n / 2; i < n; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            secondCounter++;
        }
    }
    
    return firstCounter === secondCounter;
    
};
