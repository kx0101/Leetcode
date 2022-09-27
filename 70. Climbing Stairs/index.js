var climbStairs = function(n) {
    let w1 = 1;
    let w2 = 2;
    let w = n;
    
    for(let i = 3; i <= n; i++) {
        w = w1 + w2;
        w1 = w2;
        w2 = w;
    }
    
    return w;
};
