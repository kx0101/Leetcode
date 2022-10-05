/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    
    if (head.length === 0) {
        return [];
    }
    
    let sentinel = new ListNode(0);
    sentinel.next = head;
    
    let prev = sentinel;
    let current = head;
    
    while(current !== null) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    
    return sentinel.next;
    
};
