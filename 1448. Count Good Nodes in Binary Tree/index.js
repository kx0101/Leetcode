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
var goodNodes = function(root) {
    let counter = 0;
    
    function dfs(root, bound) {
        if (!root) return null;

        if (root.val >= bound) counter++;
        
        let max = Math.max(root.val, bound);
        dfs(root.left, max);
        dfs(root.right, max);
    }
    
    dfs(root, root.val);
    return counter;
};
