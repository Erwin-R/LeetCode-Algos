// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]


var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0, head);
    let current = head;
    let prev = dummy;
    while(left > 1) {
        current = current.next;
        prev = prev.next;
        left--, right--;
    }

    let prevSwap = null;
    while(right > 0) {
        let nextNode = current.next;
        current.next = prevSwap;
        prevSwap = current;
        current = nextNode;
        right--;
    }

    prev.next = prevSwap;
    while(prev.next) {
        prev = prev.next;
    }
    prev.next = current;
    return dummy.next;
};