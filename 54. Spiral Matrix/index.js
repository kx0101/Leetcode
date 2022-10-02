/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = [];
    if (matrix.length === 0) {
        return res;
    }
    
    var left = 0;
    var bottom = matrix.length - 1;
    var top = 0;
    var right = matrix[0].length - 1;
    
    while (left <= right && top <= bottom) {
        for (var i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        for (var i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (var i = right; i >= left; i --) {
                res.push(matrix[bottom][i]);
            }
        }
        bottom--;
        if (left <= right) {
            for (var i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
        }
        left++;
    }
    return res;
};
