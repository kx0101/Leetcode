function dfs(grid: string[][], y: number, x: number, visited: boolean[][]) {
  if (y < 0 || y === grid.length || x < 0 || x === grid[0].length || visited[y][x] === true) return;
  if (grid[y][x] === '1') visited[y][x] = true;
  else return;
  dfs(grid, y + 1, x, visited)
  dfs(grid, y - 1, x, visited)
  dfs(grid, y, x + 1, visited)
  dfs(grid, y, x - 1, visited)
}

function numIslands(grid: string[][]): number {
    if (!grid) return 0;
    let counter = 0;
    let visited = Array.from(Array(grid.length), ()=> Array(grid[0].length).fill(false));
    for (let row = 0; row < grid.length; row++) {
        for(let col =0; col < grid[0].length; col ++) {
            if (grid[row][col] === '1' && visited[row][col] === false) {
                counter++;
                dfs(grid, row,col, visited);
            }
        }
    }
    return counter;
};
