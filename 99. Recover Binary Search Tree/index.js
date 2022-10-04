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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let firstNode;
    let secondNode;
    let prevNode = new TreeNode(-Number.MAX_VALUE);
    
    traverse(root);
    
    let temp = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = temp;
    
    function traverse(root) {
        if (!root) return;
        traverse(root.left);
        
        if (root.val < prevNode.val) {
            secondNode = root;
            if (!firstNode) {
                firstNode = prevNode;
            }
        }
        
        prevNode = root;
        traverse(root.right);
    }
};
