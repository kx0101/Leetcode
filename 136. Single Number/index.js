// easy solution - hashmap
// smart solution with O(1) space : bit manipulation

// XOR

// a XOR 0 = =a
// a XOR a =0
// a XOR b XOR a = (a XOR a) XOR = 0 XOR b = b

var singleNumber = function(nums) {
    let a;
    
    for(let i = 0; i < nums.length; i++) {
        a ^= nums[i];
    }
    
    return a;
};
