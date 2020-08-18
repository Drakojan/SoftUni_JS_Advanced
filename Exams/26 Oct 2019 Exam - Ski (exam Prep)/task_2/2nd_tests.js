let ourZala = require('./2ndSolution');
let assert = require('chai').assert;


describe('Outer describe', function () 
{    
    let testZala;

    before(function () {
        testZala = new ourZala('some');
    });

    describe("first actual test",()=>{

        it('test this', () => {
            
            assert.equal(testZala.isTwoEqualTwo(),2)
        });
    });

});