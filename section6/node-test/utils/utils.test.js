const utils = require('./utils');
const expect = require('expect');

// BDD: Behavior deliver development
it('should add two numbers', () =>{
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
});

it('should asnc add two numbers', (done) =>{
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () =>{
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('Should async square a number', () => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Furqan'}).toEqual({name: 'Furqan'});
//     expect([2,3,4]).toInclude(2); // Includes 2
//     expect([2, 3, 4]).toExclude(1); // Does not includes 1
//     expect ({name: 'Furqan', age: 37, location: 'Sharjah'}).toInclude({age: 37});
// });

it('should split the name', () => {
    var user = {location: 'sharjah', age:36};
    var res = utils.setName(user, 'Muhammad Furqan');
    expect(res).toInclude({
        firstName:'Muhammad',
        lastName: 'Furqan'
    });
});