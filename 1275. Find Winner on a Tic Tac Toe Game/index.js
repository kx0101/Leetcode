var tictactoe = function(moves) {
    let rows = [0, 0, 0];
    let cols = [0, 0, 0];
    let diag = 0;
    let antiDiag = 0;
    let count = 0;
    
    for(const [row, col] of moves){
        let value = (count % 2 === 0) ? 1 : -1;
        rows[row] += value;
        cols[col] += value;
        
        if (row + col === 2) {
            antiDiag += value;
        }
        
        if (row === col) {
            diag += value;
        }
        
        if ([rows[row], cols[col], antiDiag, diag].includes(3)) {
            return 'A'
        } else if ([rows[row], cols[col], antiDiag, diag].includes(-3)) {
            return "B"
        }
        
        count++;
    }
    
    if (count < 9) {
        return "Pending";
    }
    
    return "Draw";
    
    
};
