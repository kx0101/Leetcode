/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b);
    let maxBar = 0; 

    for (let cost of costs) {
        if (cost <= coins) {
            maxBar++;
            coins -= cost;
        } else break;
    }

    return maxBar;
};
