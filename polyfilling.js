if (!String.prototype.repeat) {
    String.prototype.repeat = function (n) {
        return new Array(n + 1).join(this);
    };
}

alert("La".repeat(3));