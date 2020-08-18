let SkiResort = require('./functionalityToTest')
let assert = require('chai').assert;

describe('Tests', function () {

    let res = new SkiResort('some');

    describe('test constructor', ()=>{

        it('test Name', () => {
            assert.equal(res.name,'some');
        });

        it('test voters', () => {
            assert.equal(res.voters,0);
        });

        it('test hotels', () => {
            assert.deepEqual(res.hotels,[]);
        });

    });
    
    describe('test bestHotel ', ()=>{
    
        it('without votes', () => {
            assert.equal(res.bestHotel,"No votes yet");
        });        //TODO - dont forget to test it when there's hotels
        
    });

    describe('test build()', ()=>{

        it('test empty string name', () => {

            assert.throw(()=>res.build('',5),'Invalid input');
        });

        it('test negative number of beds', () => {

            assert.throw(()=>res.build('sad',0),'Invalid input');
        });

        it('works correctly', () => {
            
            let correctMessage =res.build("Sun",10);
            assert.equal(correctMessage,'Successfully built new hotel - Sun');
            let thisHotel = res.hotels.find(hotel => hotel.name === "Sun")
            assert.equal(thisHotel.name,'Sun');
            assert.equal(thisHotel.beds,10);
            assert.equal(thisHotel.points,0);
        });

    })


    describe('test book()', ()=>{
        
        it('test empty string name', () => {

            assert.throw(()=>res.build('',5),'Invalid input');
        });

        it('test negative number of beds', () => {

            assert.throw(()=>res.build('sad',0),'Invalid input');
        });

        it('no such hotel', () => {
            assert.throw(()=>res.book('Any',5),'There is no such hotel');
        });
        it('not enough beds', () => {
            assert.throw(()=>res.book('Sun',25),'There is no free space');
        });
        it('works properly', () => {
            
            res.build('Sun',10);

            assert.equal(res.book('Sun',5),'Successfully booked');
        });
        
    })

    describe('test leave()', ()=>{
        
        it('test empty string name', () => {

            assert.throw(()=>res.leave('',5,5),'Invalid input');
        });

        it('test negative number of beds', () => {

            res.build('sun',10);
            assert.throw(()=>res.leave('Sun',0,5),'Invalid input');
        });

        it('no such hotel', () => {
            assert.throw(()=>res.leave('Any',5,5),'There is no such hotel');
        });

        it('leave works correctly', () => {

            res.build('sun',10);
            assert.equal(res.leave('Sun',2,5),'2 people left Sun hotel');
        });
    });
});

