// Since JS has no Priority Queue, I guess I will have to edit the data to mark the visited.

var numIslands = function(grid) {
    if (!grid) {
        return 0;
    }
    
    let islands = 0;
    
    for(let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                dfs(r, c);
                islands += 1;
            }
        }
    }
    
    return islands;
    
    function dfs(row, col) {
        if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1 || grid[row][col] === "0") {
            return;
        }
        
        grid[row][col] = "0";
        
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
        
    }
    
};
