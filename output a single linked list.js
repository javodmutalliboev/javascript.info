let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/**
 *
 * @param {{value: number; next: any}} list
 */
function printListUsingLoop(list) {
    for (; list;) {
        console.log(list.value, "->");
        list = list.next;
    }
}

/**
 *
 * @param {{value: number; next: any}} list
 */
function printListUsingRecursion(list) {
    console.log(list.value, "->");
    if (list.next) printListUsingRecursion(list.next);
}

printListUsingLoop(list);
printListUsingRecursion(list);