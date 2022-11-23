/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    
    let [curr, next] = [root, root.left];
    
    while (curr && next) {
        curr.left.next = curr.right;
        
        if (curr.next) {
            curr.right.next = curr.next.left;
        }
        
        curr = curr.next;
        if (!curr) {
            curr = next;
            next = curr.left;
        }
    }
    
    return root;
};
