var reverseList = function(head, prev = null) {
    if(!head){
        return prev
    }

    let temp = head.next
    head.next = prev
    prev = head
    head = temp

    return reverseList(head, prev)
};