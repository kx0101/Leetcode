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
var levelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let levels = [];
    
    while (queue.length !== 0) {
        let qLength = queue.length;
        let level = [];
        for(let i = 0; i < qLength; i++) {
            let curr = queue.shift();
            
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            
            level.push(curr.val);
        }
        levels.push(level);
    }
    
    return levels;
};
