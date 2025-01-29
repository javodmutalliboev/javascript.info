/**
 * @param {number} n
 * @return {number}
 */
function sumToUsingRecursion(n) {
    return n === 1 ? 1 : n + sumToUsingRecursion(n - 1);
}

/**
 * @param {number} n
 * @return {number}
 */
function sumToUsingForLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * @param {number} n
 * @return {number}
 */
function sumToUsingArithmeticProgression(n) {
    return n * (1 + n) / 2;
}

/**
 *
 * @param {number} testCase
 */
function print(testCase) {
    console.log(sumToUsingForLoop(testCase));
    if (testCase < 100) {
        print(testCase + 1);
    }
}

print(1);