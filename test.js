describe("pow", function () {
    /*
    it("2 raised to power 3 is 8", function () {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raised to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
    });
    */

    describe("raises x to power 3", function () {
        function makeTest(x) {
            let expected = x * x * x;

            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    it("for negative n the result is NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });

    // ... more tests to follow here, both describe and it can be added
});

/*
describe("determines n (n > 0) is a prime", function() {
    function makeTest(n) {
        it(`${n} is a prime number`, function () {
            assert.isTrue(isPrime(n));
        });
    }

    makeTest(11);
    makeTest(13);
    makeTest(17);
});
*/
