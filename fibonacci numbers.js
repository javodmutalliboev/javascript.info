/**
 *
 * @param {bigint} n
 * @return {bigint}
 */
function fibUsingRecursion(n) {
    if (n < 0) {
        return 0n;
    }

    if (n === 0n) return 0n;
    if (n === 1n) return 1n;

    return fibUsingRecursion(n - 1n) + fibUsingRecursion(n - 2n);
}

/**
 *
 * @param {number} n
 * @return {number}
 */
function fibUsingLoop(n) {
    if (n < 0) {
        return 0;
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let next = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = prev + next;
        [prev, next] = [next, result];
    }

    return result;
}

console.log(fibUsingLoop(3));
console.log(fibUsingLoop(7));
console.log(fibUsingLoop(77));