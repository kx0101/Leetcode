function exist(board: string[][], word: string): boolean {
    const visited: boolean[][] = Array.from(Array(board.length), () => Array(board[0].length).fill(false));

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;

    function dfs(row: number, col: number, index: number): boolean {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index] || visited[row][col] === true) {
            return false;
        }

        if (word.length - 1 === index) {
            return true;
        }

        visited[row][col] = true;

        let result = dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1);

        visited[row][col] = false;

        return result;
    }
};
