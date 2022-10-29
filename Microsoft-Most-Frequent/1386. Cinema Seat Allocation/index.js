var maxNumberOfFamilies = function(n, reservedSeats) {
    
    reservedSeats = reservedSeats.sort((a, b) => a[0] - b[0]);
    
    let [left, mid, right] = [1, 1, 1];
    
    let currRow = 0
    let result =- 2
    
    for (let [row, col] of reservedSeats) {
        if (currRow !== row) {
            if (row !== currRow + 1) result += (row - currRow - 1) * 2
            
            result += Math.max(mid, right + left)
            currRow = row
            left = 1;
            right = 1;
            mid = 1;
        }
        
        if (col === 2|| col === 3) left = 0

        if (col === 4|| col === 5){
            left = 0;
            mid = 0;
        }
        
        if (col === 6 || col === 7){
            mid = 0;
            right = 0;
        }

        if (col === 8 || col === 9) right = 0

    }

    return result + Math.max(mid, right + left) + (n - currRow) * 2
};
