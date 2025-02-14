let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, index, receiver) {
        if (index < 0) {
            index = target.length + +index;
        }
        return Reflect.get(target, index, receiver);
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
console.log(array[1]);

// Other array functionality should be kept "as is"