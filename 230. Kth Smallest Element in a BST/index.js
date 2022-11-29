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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = [];
    
    function dfs(root) {
        if (!root) return;
        
        if (root.left) dfs(root.left);
        stack.push(root.val);
        
        if (root.right) dfs(root.right);
    }
    
    dfs(root);
    return stack[k - 1];
};
