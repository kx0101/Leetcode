/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    
    let result = new Array(n);
    result[1] = 1;
    result[2] = 2;
    
    for(let i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    
    return result[n];
};
