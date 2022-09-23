var concatenatedBinary = function (n) {
    const mod = 1e9 + 7;
    
    let j = 2;
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        if (i === j) {
            j *= 2;
        }
        
        result = result * j + i;
        result %= mod;
    }
    
    return result;
};

Runtime: 242 ms, faster than 55.56% of JavaScript online submissions for Concatenation of Consecutive Binary Numbers.
Memory Usage: 43.6 MB, less than 55.56% of JavaScript online submissions for Concatenation of Consecutive Binary Numbers.
