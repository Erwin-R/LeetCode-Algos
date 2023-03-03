// 21. Merge Two Sorted Lists
// Easy
// 17.2K
// 1.6K
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let current = newList;
    while(list1 && list2){
        if(list1.val <= list2.val){
            current.next = list1
            list1 = list1.next
        } else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    list1 ? current.next = list1 : current.next = list2
    return newList.next
};

list1 = []
list2 = []
current = 4
newList = [1,1,2,3,4,4]