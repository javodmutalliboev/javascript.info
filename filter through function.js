/**
 *
 * @param { number } a
 * @param { number } b
 * @return { function }
 */
function inBetween(a, b) {
    return function (value) {
        return value >= a && value <= b;
    };
}

/**
 *
 * @param {number[]} arr
 * @return {function}
 */
function inArray(arr) {
    return function (value) {
        return arr.includes(value);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));