function findBalancedNode(head) {
    let totalSum = 0;
    let curr = head;
     
    // Traverse through all node
    // to find the total sum
    while (curr) {
      totalSum += curr.val;
      curr = curr.next;
    }
 
    // Set current_sum and remaining
    // sum to zero
    let current_sum = 0;
    let remaining_sum = 0;
    curr = head;
 
    // Traversing the list to
    // check balanced node
    while (curr) {
        remaining_sum = totalSum - (current_sum + curr.val);
 
        // If sum of the nodes on the left and
        // the current node is equal to the sum
        // of the nodes on the right
        if (current_sum === remaining_sum) {
            return curr.val;
        }
        current_sum += curr.val;
        curr = curr.next;
    }
    return -1;
}
