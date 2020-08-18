let Parser = require('./solution');
let assert = require('chai').assert;

describe('Outer describe', function () 
{    
    let parser;

    beforeEach(function () {
        parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
    });

    describe("test Constructor",()=>{

        it('test dataParsing', () => {
            let expectedResult =JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            let actualResult = parser.data;

            assert.deepEqual(actualResult,expectedResult)
        });

        it('this.log is []', () => {

            assert.deepEqual(parser._log,[])
        });

        it('this.addToLog returns proper message', () => {

            parser._addToLog('test')
            assert.equal(parser._addToLog('test'),"Added to log")
        });     
        it('this.addToLog returns proper message', () => {

            parser._addToLog('test')
            assert.equal(parser._addToLog('test'),"Added to log")
        });  
        it('this.addToLog returns proper message', () => {

            parser._addToLog('test')
            assert.equal(parser._addToLog('test'),"Added to log")
        });   
    });

    describe("test Constructor",()=>{

        it('test dataParsing', () => {
            let expectedResult =JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
            let actualResult = parser.data;

            assert.deepEqual(actualResult,expectedResult)
        });
    });
});