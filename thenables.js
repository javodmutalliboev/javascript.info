let promise = new Promise((resolve, reject) => resolve("works"));

promise.then(v => alert(v)).catch(v => alert(v));
promise.then(v1 => alert(v1), e => alert(e));

/*
    The “invisible try...catch” around the executor
    automatically catches the error and turns it into rejected promise.
*/