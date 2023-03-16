var removeNthFromEnd = function(head, n) {
    let newNode = new ListNode(0, head); 
    let slow = newNode;
    let fast = newNode;

    while(n >= 0){
            fast = fast.next
            n--
    }


    while(fast){
        slow = slow.next
        fast = fast.next
    }


    slow.next = slow.next.next

    return newNode.next
};