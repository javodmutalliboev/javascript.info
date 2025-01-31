let user = {
    firstName: "John",
    say(phrase) {
        console.log(`${phrase}, ${this.firstName}!`);
    }
};

for (let key in user) {
    if (typeof user[key] === "function") {
        user[key] = user[key].bind(user);
    }
}

let say = user.say;

say("Hello");
say("Bye");