class Rat{

    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    };

    unite(otherRat) {
     
        if (typeof otherRat === typeof this) {
            this.unitedRats.push(otherRat);
        }
    };

    getRats(){

        return this.unitedRats;
    };

    toString(){
        
        let resultString = this.name;
        
        if (this.unitedRats.length>0) {
            this.unitedRats.forEach(e=>resultString = resultString + (`\n##${e.toString()}`))
        }

        return resultString;
    }
}

let firstRat = new Rat("Peter");

console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());

console.log(firstRat.toString());
