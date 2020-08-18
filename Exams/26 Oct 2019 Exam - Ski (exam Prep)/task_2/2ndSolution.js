ourZala = class Zala{

    constructor(name) {
        this.name = name;
    }

    isTwoEqualTwo(){

        return 2;
    }
}

module.exports = ourZala;

let zala = new ourZala('sad');
console.log(zala.isTwoEqualTwo());