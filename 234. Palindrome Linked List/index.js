/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {    
    if (head === null) return true;
    
    let firstHalfEnd = endOfFirstHalf(head);
    let secondHalfStart = reverseList(firstHalfEnd.next);
    
    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;
    
    while(result && p2 !== null) {
        if (p1.val !== p2.val) {
            result = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    
    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
    
    function reverseList(head) {
        let currentNode = head;
        let previous = null;
        
        while(currentNode !== null) {
            let next = currentNode.next;
            currentNode.next = previous;
            previous = currentNode;
            currentNode = next;
        }
        
        return previous;
    }
    
    function endOfFirstHalf(head) {
        let slow = head;
        let fast = head;
        
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next
        }
        
        return slow;
    }
};
