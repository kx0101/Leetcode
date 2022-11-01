/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let [num, pow, steps] = [0n, 0n, 0];
    
    for(let i = s.length - 1; i >=0; i--) {
        if (s[i] === "1") {
            num += 2n ** pow;
        }
        pow++;
    }
    
    while (num !== 1n) {
        if (num % 2n === 0n) {
            num = num / 2n;
        } else {
            num = num + 1n;
        }
        
        steps++;
    }
    
    return steps;

};
