/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length == 0) return null


    while(lists.length > 1){
        mergedLists = []

        for(let i = 0; i < lists.length; i+=2){ //incrementing i by 2 because we want to compare pairs(2) linked lists
            list1 = lists[i]
            if(i + 1 < lists.length){
                list2 = lists[i + 1]
            } else {
                list2 = null
            }

            mergedLists.push(mergeSort(list1, list2))
        }
        lists = mergedLists
    }

    return lists[0]
};


const mergeSort = (list1, list2) => {
    let newList = new ListNode()
    let current = newList


    while(list1 && list2){
        if(list1.val < list2.val){
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
}



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let previous = null

    for(let i = 0; i < lists.length; i++){
        previous = mergeTwoLists(previous, lists[i])
    }


    return previous
};



var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let current = newList

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