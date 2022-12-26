/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = [];
    let result = new Array(T.length).fill(0);
    // [0, 0, 0, 0]

    for(let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            let stackIndex = stack.pop();
            result[stackIndex] = i - stackIndex;
        }
        stack.push(i);
    }

    return result;
}
