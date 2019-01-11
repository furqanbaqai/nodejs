const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () =>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);
    it('should call the spies correctly.', () =>{
        var spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();     
        spy('Andrew', 25)
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call save user with user object', () =>{
        var email = 'asd@example.com';
        var password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});