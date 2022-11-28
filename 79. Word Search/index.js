/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // [i][j - 1]
    // [i][j + 1]
    // [i - 1][j]
    // [i + 1][j]
    
    let rows = board.length;
    let cols = board[0].length;
    
    function backtrack(row, col, index) {
        if (word.length === index) return true; // found the word
        if (row < 0 || row >= rows) return false;
        if (col < 0 || col >= cols) return false;
        if (word[index] !== board[row][col]) return false;
        
        board[row][col] = 0;
        let rowOffset = [0, 1, 0, -1];
        let colOffset = [1, 0, -1, 0];
        
        for(let i = 0; i < 4; i++) {
            if (backtrack(row + rowOffset[i], col + colOffset[i], index + 1)) {
                return true;
            }
        }
        
        board[row][col] = word[index];
        return false;
        
    }
    
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if (backtrack(row, col, 0)) {
                return true;
            }
        }
    }
    
    return false;
};
