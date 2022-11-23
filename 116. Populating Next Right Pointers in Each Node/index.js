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
    
    let leftmost = root;
    
    while (leftmost.left) {
        let head = leftmost;
        
        while (head) {
            head.left.next = head.right;
            
            if (head.next) {
                head.right.next = head.next.left;
            }
            
            head = head.next;
        }
        
        leftmost = leftmost.left;
    }
    
    return root;
};
