import User from "./module1.js";

console.log(new User("Javod").name);

function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        }
    });
}

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length);

sayHi("John");