let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
};

room.occupiedBy = meetup;

console.log(
    JSON.stringify(meetup,
        function replacer(key, value) {
            console.log(`${key}: ${value}`);
            return key === "occupiedBy" ? undefined : value;
        },
        space = 4
    )
);