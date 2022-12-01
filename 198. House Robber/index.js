/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums.length) return 0;
    
    let [left, mid] = [0, 0];
    
    for(const right of nums) {
        let temp = Math.max(right + left, mid);
        left = mid;
        mid = temp;
    }
    
    return mid;
};
