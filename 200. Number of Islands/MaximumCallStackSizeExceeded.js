// Solution without modifying the data, although I am getting an error of Maximum call stack size exceeded.


var numIslands = function(grid) {
     if (grid.length == 0) {
      return 0;
    }

    var count = 0;

    var z = new Array(grid[0].length).fill(0);
    var visit = new Array(grid.length);

    for (let i = 0; i < visit.length; i++) {
        visit[i] = z;
    }

    function traverse(x, y, grid, visit, count) {
        var col = grid.length;
        var row = grid[0].length;
        if (x >= 0 && y >= 0 && x < row && y < col) {
            visit[x][y] = 1;
        } else {
            return;
        }
        if (grid[x][y] != 1) {
            return;
        } else {
            traverse(x + 1, y, grid, visit, count);
            traverse(x - 1, y, grid, visit, count);
            traverse(x, y + 1, grid, visit, count);
            traverse(x, y - 1, grid, visit, count);
            count++;
        }
    }

    for (i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (visit[i][j] == 0) {
                traverse(i, j, grid, visit, count);
            } else {
                continue;
            }
        }
    }

    return count;
};
