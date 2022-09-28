var merge = function(intervals) {
    let res = [];
    let preEnd;
    intervals.sort((x, y) => x[0] - y[0]);
    for (const [start, end] of intervals) {
        if (preEnd !== undefined) {
            if (start > preEnd) {
                res.push([start, end]);
                preEnd = end;
            } else {
                let pre = res.pop();
                let left = Math.min(pre[0], start)
                let right = Math.max(pre[1], end);
                res.push([left, right]);
                preEnd = right;
            }
        } else {
            res.push([start, end]);
            preEnd = end;
        }
    }
    
    return res;
    
};
