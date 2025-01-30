let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

/**
 *
 * @param {string} field
 * @return {function}
 */
function byField(field) {
    return function (a, b) {
        console.log(field);
        return a[field] > b[field] ? 1 : -1;
    };
}

console.log([...users].sort(byField("name")));
console.log([...users].sort(byField("age")));