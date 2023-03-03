// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
    var runner = head;
    while(runner !== null && runner.next  != null ){
        if(runner.next.val !== runner.val){
            runner = runner.next;
        } else{
            runner.next = runner.next.next
        }
    }
    return head
};