function encodeAndDecodeMessages() {
        console.log('TODO...')

} 

class  Rectangle{
    #witdth; 
    constructor(wdh) {
        this.#witdth = wdh;
    }
}

let rectan = new Rectangle(20);
rectan.prototype.area = function calcArea(height) {
    return this.witdth*height;
}
console.log(rectan.area(5));