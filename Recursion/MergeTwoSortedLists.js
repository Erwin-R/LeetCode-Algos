var mergeTwoLists = function(list1, list2) {
    return recursiveFunction(list1, list2)
};


const recursiveFunction = (list1, list2, newList = new ListNode(), current = newList) => {
    if(list1 && list2){
        if(list1.val >= list2.val){
            current.next = list2;
            list2 = list2.next;
            return recursiveFunction(list1, list2, newList, current.next)
        } else{
            current.next = list1;
            list1 = list1.next
            return recursiveFunction(list1, list2, newList, current.next)
        }
    } else{
        list1 ? current.next = list1 : current.next = list2
        return newList.next
    }  
}