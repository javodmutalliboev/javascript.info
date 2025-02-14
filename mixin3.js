let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {
    // __proto__: sayMixin,

    sayHi() {
        // call parent method
        super.say(`Hello ${this.name}`);
    },

    sayBye() {
        super.say(`Bye ${this.name}`);
    }
};

Object.setPrototypeOf(sayHiMixin, sayMixin);

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude