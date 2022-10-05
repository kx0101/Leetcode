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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        root = new TreeNode(val, root);
    }
    
    function dfs(node, level = 1) {
        if (!node) {
            return null;
        }
        
        if (level === depth - 1) {
            node.left = new TreeNode(val, node.left);
            node.right = new TreeNode(val, null, node.right);
        }
        
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    
    dfs(root);
    return root;
};
