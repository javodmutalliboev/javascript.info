function f(x) {
    console.log(x);
}

function delay(f, ms) {
    function wrapper(x) {
        setTimeout(() => {
            return f.apply(this, arguments);
        }, ms);
    }

    return wrapper;
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 2000);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms