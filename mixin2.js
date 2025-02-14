// mixin
let sayHiMixin = {
    sayHi() {
        alert(`Hello ${this.name}`);
    },
    sayBye() {
        alert(`Bye ${this.name}`);
    }
};

class Person {
}

class User extends Person {
    // ...
}

Object.assign(User.prototype, sayHiMixin);