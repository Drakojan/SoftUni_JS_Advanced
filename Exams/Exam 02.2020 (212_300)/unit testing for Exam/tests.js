let { Repository } = require("./solution.js");
let assert = require('chai').assert;

describe("Tests …", function () {

    describe("test Constructor", function () {
        it("initialisation", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            keysActual = Object.keys(properties);
            keysInClass = Object.keys(repository.props)
            assert.deepEqual(keysActual, keysInClass,"this.prop did not initialize properly");
            assert.typeOf(repository.data,'map',"data is not of type Map")
            assert.equal(repository.nextId(), 0,"this.id did not initialize to 0 or nextID prop is not working");
        });

        it("adding", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: "Pesho",
                age: "22",
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            
            assert.doesNotThrow(()=>repository.add(entity));
            assert.throws(()=>repository.add(entity2),`Property age is not of correct type!`)
            assert.equal(repository.add(entity),1)

        });

        it("adding", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: "Pesho",
                age: "22",
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            repository.add(entity)

            assert.doesNotThrow(()=>repository.getId(0));
            assert.throws(()=>repository.getId(5))

        });
        it("getId returning proper string", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            repository.add(entity)

            let result = repository.getId(0);
            assert.deepEqual(result,{"name":"Pesho","age":22,"birthday":new Date(1998, 0, 7)});
            assert.throws(()=>repository.getId(3))

        });
        it("Del working", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Ivan",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            repository.add(entity)
            repository.add(entity2)
            repository.del(0)

            let result = repository.count
            assert.equal(result,1)
            assert.throws(()=>repository.del(4))
            assert.throws(()=>repository.get(0))

        });

        it("Del throwing correct msg", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Ivan",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            repository.add(entity)
            repository.add(entity2)
            repository.del(0)

            try {
              repository.del(4);  
            } catch (e) {
                result = e.message;
                expectedMessage = `Entity with id: 4 does not exist!`;
                assert.equal(result,expectedMessage)
            }

        });
        it("update entity", function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
        
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Ivan",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
        
            let repository = new Repository(properties);
            repository.add(entity)
            repository.update(0,entity2)

            let result= repository.getId(0);
            assert.deepEqual(result,{"name":"Ivan","age":22,"birthday":new Date(1998, 0, 7)});
            assert.throws(()=>repository.update(3,entity2))

        });

    });
    // TODO: …
});
// describe('sum() behavior', () => {
    
//     it('check the return result', ()=>{

//         let result = Repository(5,37);

//         assert.equal(result, 42, 'the result should be 42')
//     })

//     it('check the return result2', ()=>{

//         let result = sum(5,10);

//         assert.equal(result, 17, 'this test should fail')
//     })

//     describe('constructor() CHECK', ()=>{

//         it('check the return result2', ()=>{

//             let result = sum(5,10);
    
//             assert.equal(result, 15, 'it inside a nested describe')
//         })
//     })
// });