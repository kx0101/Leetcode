/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((x, y) => (y[0] - y[1]) - (x[0] - x[1]));
    
    let minCost = 0;
    
    for(let i = 0; i < costs.length / 2; i++) {
        minCost += costs[i][1];
    }
    
    for(let i = costs.length / 2; i < costs.length; i++) {
        minCost += costs[i][0];
    }
    
    return minCost;
};
