/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let res = 0;
    
    for(let i = 0; i < grid.length; i++) {
        res += negativeEachRow(grid[i]);
    }
    
    return res;
};

function negativeEachRow(row) {
    let res = 0;
    let [left, right] = [0, row.length - 1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (row[mid] >= 0) {
            left = mid + 1;
        } else if (row[mid] < 0) {
            res += right - mid + 1;
            right = mid - 1;
        }
    }
    
    return res;
}
