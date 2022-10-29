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
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.leftMostInorder(root);
};

BSTIterator.prototype.leftMostInorder = function(root) {
    while(root) {
        this.stack.push(root);
        root = root.left;
    }
}
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let topMostNode = this.stack.pop();
    
    if (topMostNode.right) {
        this.leftMostInorder(topMostNode.right);
    }
    
    return topMostNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
