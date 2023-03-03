// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

var reverseList = function(head) {
    let current = head;
    let previous = null;
    while(current !== null){
        let temp = current.next
        current.next = previous
        previous = current
        current = temp
   
    }
    return previous
};

// current = null
// previous = 5
// temp = null
// current.next = 4
// [5,4,3,2,1] null