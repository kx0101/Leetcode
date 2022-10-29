/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                maxArea = Math.max(maxArea, dfs(grid, r, c))
            }
        }
    }
    
    return maxArea;
    
    function dfs (grid, r, c) {
        if ((r < 0 || r >= grid.length) || (c < 0 || c >= grid[r].length)) {
            return 0;
        }
        
        if (grid[r][c] === 0) {
            return 0;
        }
        
        grid[r][c] = 0;
        
        return 1 + dfs(grid, r - 1, c) + dfs(grid, r, c - 1) + dfs(grid, r + 1, c) + dfs(grid, r, c + 1);
    }
};
