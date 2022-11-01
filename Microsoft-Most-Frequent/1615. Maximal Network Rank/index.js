/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let count = new Array(n).fill(0);
    
    let matrix = new Array(n);
    for(let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
    }
    
    for(const [c1, c2] of roads) {
        count[c1]++;
        count[c2]++;
        matrix[c1][c2] = 1;
        matrix[c2][c1] = 1;
    }
    
    let max = 0;
    for(let i = 0; i < n - 1; i++) {
        for(let j = i + 1; j < n; j++) {
            const rank = count[i] + count[j] - matrix[i][j];
            max = Math.max(max, rank);
        }
    }
    
    return max;
};
