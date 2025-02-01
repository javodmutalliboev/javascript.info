function Rabbit() {
}

Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit.eats);

/*
* 1. true
* 2. false
* 3. true
* 4. undefined
* */