/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0 || !prices) return 0;

    let [sold, hold, rest] = [0, -Infinity, 0];

    for (let p of prices) {
        hold = Math.max(hold, rest - p);
        rest = Math.max(rest, sold);
        sold = hold + p;
    }

    return Math.max(sold, rest);
};
