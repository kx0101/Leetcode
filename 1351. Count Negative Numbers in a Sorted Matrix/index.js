/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let n = grid[0].length;
    let m = grid.length;
    let row = m - 1;
    let col = 0;
    let res = 0;
    
    while (row >= 0 && col < n) {
        if (grid[row][col] >= 0) {
            col++;
        } else {
            res += n - col;
            row--;
        }
    }
    
    return res;
};
