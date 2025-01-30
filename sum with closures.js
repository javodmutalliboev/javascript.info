/**
 * @param {number} n
 * @return {(number) => number}
 */
function sum(n) {

    /**
     * @param {number} m
     * @return {number}
     * */
    function sum(m) {
        return n + m;
    }

    return sum;
}

console.log(sum(1)(2));
console.log(sum(5)(-1));