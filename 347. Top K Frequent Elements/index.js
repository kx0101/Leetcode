/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let bucket = [];
    let result = [];
    
    for (const num of nums) {
        map = map.set(num, (map.get(num) || 0) + 1);
    }
    
    for(const [num, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) return result;
    }
};
