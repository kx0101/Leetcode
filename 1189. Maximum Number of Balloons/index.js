/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let [bCount, aCount, lCount, oCount, nCount] = [0, 0, 0, 0, 0];
    
    for(let i = 0; i < text.length; i++) {
        if (text[i] === "b") {
            bCount++;
        } else if (text[i] === "a") {
            aCount++;
        } else if (text[i] === "l") {
            lCount++;
        } else if (text[i] === "o") {
            oCount++;
        } else if (text[i] === "n") {
            nCount++;
        }
    }
    
    lCount = Math.floor(lCount / 2)
    oCount = Math.floor(oCount / 2)
    
    return Math.min(bCount, aCount, lCount, oCount, nCount);
};
