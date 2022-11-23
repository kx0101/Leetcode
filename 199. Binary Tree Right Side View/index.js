/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    let q = [root];
    let result = [];
    
    while (q.length) {
        let length = q.length;
        for(let i = 0; i < length; i++) {
            let curr = q.shift();
            if (i === length - 1) result.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }
    
    return result;
    
};
