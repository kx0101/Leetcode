/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== "X") {
                continue;
            }
            
            let previousLeft = board[i]?.[j - 1];
            let previousUp = board[i - 1]?.[j];
            
            if (previousLeft === "X" || previousUp === "X") {
                continue;
            }
            
            count++;
        }
    }
    
    return count;
};
