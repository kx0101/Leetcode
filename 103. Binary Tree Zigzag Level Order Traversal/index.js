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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let result = [];
    let deep = 0;
    
    while (queue.length) {
        let qLength = queue.length;
        let level = [];
        
        for(let i = 0; i < qLength; i++) {
            let curr = queue.shift();
            
            if (deep % 2 === 0) level.push(curr.val);
            else level.unshift(curr.val);
            
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        result.push(level);
        deep++;
    }
    
    return result;
};
