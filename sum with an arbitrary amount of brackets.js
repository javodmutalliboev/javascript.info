/**
 *
 * @param { number } n
 * @return { function }
 */
function sum(n) {
    let s = n;

    /**
     *
     * @param { number } m
     */
    const accumulator = function func(m) {
        s += m;
        return func;
    };

    accumulator.toString = function () {
        return s.toString();
    };

    return accumulator;
}

console.log(sum(1)(2).toString()); // 3
console.log(sum(1)(2)(3).toString()); // 6
console.log(sum(2).toString()); // 2
console.log(sum(5)(-1)(2).toString()); // 6
console.log(sum(6)(-1)(-2)(-3).toString()); // 0
console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15