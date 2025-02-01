function Juice(title) {
    this.title = title;
}

const dena = new Juice("Dena");

const tipTop = new dena.constructor("Tip Top");

alert(tipTop.title);