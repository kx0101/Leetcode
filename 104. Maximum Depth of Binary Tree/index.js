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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    let queue = [root];
    let depth = 0;
    let next = 0;
    
    while (queue.length) {
        depth++;
        next = queue.length;
        for (let i = 0; i < next; i++) {
            let current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    
    return depth;
    
};
