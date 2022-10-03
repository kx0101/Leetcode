var removeDigit = function(number, digit) {
    let index;
    
    for(let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            
            if (number[i + 1] > digit) {
                return number.slice(0, i) + number.slice(i + 1);
            } else {
                index = i;
            }
        }
    }
    
    return number.slice(0, index) + number.slice(index + 1);
};
