/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let comb = [];
    
    backtrack(target, comb, 0, candidates, result);
    return result;
    
    function backtrack(remain, comb, start, candidates, result) {
        if (remain === 0) {
            result.push(Array.from(comb));
            return;
        } else if (remain < 0) {
            return;
        }
        
        for(let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i, candidates, result);
            comb.pop();
        }
    }
    
};
