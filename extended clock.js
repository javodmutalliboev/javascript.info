class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let {precision = 1000} = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(
            () => this.render(), 1000
        );
    }
}

let extendedClock = new ExtendedClock(
    {
        template: "h:m:s",
        precision: 1000
    }
);
extendedClock.start();