const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('server',()=>{
    describe('#get/', ()=>{
        it('should return hello world expression', (done) => {
            request(app)
                .get('/')
                .expect(200)
                // .expect('Hello World')
                // .expect({
                //     error: 'Page not found'
                // })
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });
    describe('#get/users',()=>{
        it('should return users array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Furqan',
                        id: 'T123'
                    });
                })
                .end(done);
        });
    });

});

