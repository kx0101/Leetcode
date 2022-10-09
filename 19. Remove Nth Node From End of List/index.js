/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const length = getNthFromHead(head, n);
    
    const isHead = length < 0;
    if (isHead) return head.next;
    
    const curr = moveNode(head, length);
    
    curr.next = curr.next.next;
    
    return head;
}

const getNthFromHead = (curr, n, length = 0) => {
    while (curr) {
        curr = curr.next;
        length++;
    }
    
    return (length - n) - 1;
}

const moveNode = (curr, length) => {
    while (length) {
        curr = curr.next;
        length--;
    }
    
    return curr;
}
