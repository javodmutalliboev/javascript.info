let user = {
    name: "John Smith",
    age: 35
};

const json = JSON.stringify(user);

console.log(json);

const parsed = JSON.parse(json);

console.log(parsed);