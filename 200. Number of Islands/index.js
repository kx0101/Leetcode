/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid) return 0;
    let counter = 0;
    let visited = Array.from(Array(grid.length), () => Array(grid[0].length).fill(false));
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1" && visited[row][col] === false) {
                counter++;
                dfs(grid, row, col, visited);
            }
        }
    }
    
    return counter;
    
    function dfs(grid, row, col, visited) {
        if (row < 0 || row === grid.length || col < 0 || col === grid[0].length || visited[row][col] === true) return;
        
        if (grid[row][col] === "1") visited[row][col] = true;
        else return;
        
        dfs(grid, row, col + 1, visited);
        dfs(grid, row, col - 1, visited);
        dfs(grid, row + 1, col, visited);
        dfs(grid, row - 1, col, visited);
    }
    
};
