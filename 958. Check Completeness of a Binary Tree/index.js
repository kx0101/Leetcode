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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root];
    let prevNode = root;

    while (queue.length)  {
        let curr = queue.shift();

        if (curr) {
            if (prevNode === null) {
                return false;
            }

            queue.push(curr.left);
            queue.push(curr.right);
        }

        prevNode = curr;
    }

    return true;
};
