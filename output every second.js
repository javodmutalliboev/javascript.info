/**
 * @param { number } from
 * @param { number } to
 */
function printNumbersUsingSetInterval(from, to) {
    function go() {
        if (from === to) clearInterval(timerId);
        console.log(from++);
    }

    go();
    const timerId = setInterval(
        go, 1000
    );
}

/**
 *
 * @param from { number }
 * @param to { number }
 */
function printNumbersUsingSetTimeout(from, to) {
    function go() {
        console.log(from++);
        if (from <= to) setTimeout(go, 1000);
    }

    go();
}

printNumbersUsingSetTimeout(5, 10);