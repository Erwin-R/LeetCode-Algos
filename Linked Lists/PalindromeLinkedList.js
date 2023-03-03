// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false



var isPalindrome = function(head) {
    let forward = "";
    let backward = "";
    while(head){
        forward = `${forward}${head.val}`
        backward = `${head.val}${backward}`
        head = head.next
    }

    return forward === backward;
};


var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let current = slow;
    let prev = null;
    while(current){
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    let head2 = prev;
    while(head && head2){
        if(head.val !== head2.val) return false;
        head = head.next;
        head2 = head2.next;
    }
    return true;
};

// slow = 2
// fast = null
//        *
// [1,2,2,1]
// current = null
// prev = 1
// nextNode = null

//      h1
// [1,2,2,1] h2 = null
// [1, 2, null]
// head = 2
// head2 = 2