let dictionary = Object.create(null, {
    toString: {
        value: function () {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

alert(dictionary);