/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let n = preorder.length;
    if (n === 0) return null;
    
    let i = 0;
    
    const process = (bound) => {
        if (i === n || preorder[i] > bound) {
            return null;
        }
        
        const value = preorder[i];
        const node = new TreeNode(value);
        i++;
        
        node.left = process(node.val);
        node.right = process(bound);
        
        return node;
    }
    
    const root = process(Number.MAX_SAFE_INTEGER);
    
    return root;
};
