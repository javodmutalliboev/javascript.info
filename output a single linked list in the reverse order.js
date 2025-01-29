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
function printListUsingLoopInReverseOrder(list) {
    let temp = [];
    for (; list;) {
        temp.push(list.value);
        list = list.next;
    }
    for (let i = temp.length - 1; i >= 0; i--) {
        console.log(temp[i], "->");
    }
}

/**
 *
 * @param {{value: number; next: any}} list
 */
function printListUsingRecursionInReverseOrder(list) {
    if (list.next) {
        printListUsingRecursionInReverseOrder(list.next);
    }
    console.log(list.value, "->");
}

printListUsingLoopInReverseOrder(list);
console.log("\n");
printListUsingRecursionInReverseOrder(list);