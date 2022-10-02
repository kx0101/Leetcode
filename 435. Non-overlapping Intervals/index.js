var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort((x, y) => x[1] - y[1]);
    let previous = intervals[0];
    let min = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if (previous[1] > intervals[i][0]) {
            min++;
        } else {
            previous = intervals[i];
        }
    }
    
    return min;
    
};
