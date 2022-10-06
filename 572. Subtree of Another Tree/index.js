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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    
    if (isIdentical(root, subRoot)) {
        return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
    function isIdentical(nodeOne, nodeTwo) {
        if (!nodeOne || !nodeTwo) {
            return nodeOne === null && nodeTwo === null;
        }
        
        return nodeOne.val === nodeTwo.val && isIdentical(nodeOne.left, nodeTwo.left) && isIdentical(nodeOne.right, nodeTwo.right); 
    }
    
};
