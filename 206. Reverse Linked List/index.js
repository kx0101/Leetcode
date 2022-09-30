var reverseList = function(head) {
    
    if (head === null || head.next === null) {
        return head;
    }
    
    if (!head) {
        return [];
    }
    
    let reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return reversedHead;
};
