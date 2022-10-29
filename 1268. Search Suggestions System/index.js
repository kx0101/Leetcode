/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products = products.sort()
    let result = [];
    let [left, right] = [0, products.length - 1];
    
    for(let i = 0; i < searchWord.length; i++) {
        let c = searchWord.charAt(i);
        let res = [];
        
        while (products[left]?.charAt(i) < c) left++;
        while (products[right]?.charAt(i) > c) right--;
        
        for(let j = 0; j < 3 && left + j <= right; j++) {
            res.push(products[left + j]);
        }
        
        result.push(res);
    }
    return result;
};
