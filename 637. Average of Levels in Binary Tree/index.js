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
var averageOfLevels = function(root) {
    let queueInJSLOL = [root];
    let result = [];
    
    while (queueInJSLOL.length) {
        let qlength = queueInJSLOL.length;
        let row = 0;
        for(let i = 0; i < qlength; i++) {
            let current = queueInJSLOL.shift();
            row += current.val;
            if (current.left) queueInJSLOL.push(current.left);
            if (current.right) queueInJSLOL.push(current.right);
        }
        
        result.push(row / qlength);
    }
    
    return result;
};
