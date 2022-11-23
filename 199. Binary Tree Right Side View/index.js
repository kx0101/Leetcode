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
    let result = [];
    if (!root) return result;
    
    
    function dfs(root, level) {
        if (level === result.length) {
            result.push(root.val);
        }
        
        if (root.right) {
            dfs(root.right, level + 1);
        }
        
        if (root.left) {
            dfs(root.left, level + 1);
        }
    }
    
    dfs(root, 0);
    return result;
};
