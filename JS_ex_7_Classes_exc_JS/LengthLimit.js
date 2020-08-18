class Stringer{

    constructor(innerString, innerLength) {
        this.innerString =innerString;
        this.innerLength=innerLength;
    }

    increase(length) {
        this.innerLength+=length;
    }
    
    decrease(length){
        if (this.innerLength<length) {
            this.innerLength=0;
        }
        else this.innerLength-=length;
    } 

    toString()
    {

        if (this.innerString.length>this.innerLength) {
            
            let difference = this.innerString.length-this.innerLength;
            difference=this.innerString.length-difference;             

            return this.innerString.substring(0,difference)+'...'
        } 
        else {
            return this.innerString;
        }

    }
}

let test = new Stringer("Test", 5);
//console.log(test.toString()); // Test

test.decrease(6);
console.log(test.toString()); // ...

