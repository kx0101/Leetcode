/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let indexNode = head;
    
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : undefined;
        
        if (slow === fast) {            
            while(indexNode !== slow) {
                indexNode = indexNode.next;
                slow = slow.next;
            }
            return indexNode;
        }
    }
    
    return null;
};
