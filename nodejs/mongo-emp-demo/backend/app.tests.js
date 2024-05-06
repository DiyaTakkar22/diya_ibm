import supertest from "supertest";
import app from './index.js'

//decribe- test suite
//describe(arg1,arg2);
//describe('it should pass',()=>{});

//it- one test case
//it('it should pass',()=>{});

// This object will be used to make HTTP requests to the Express.js application defined in app
const request=supertest(app);
let token = '';

//describe('it should pass',() => { ... });: This line starts a test suite using the describe function. Test suites are used to group related test cases together.
//it('it should succeed login', async () => { ... }); : This line defines a test case within the test suite. 
//how to test a particular method
describe('it should pass',()=>{
    it('it should succeed login ',async ()=>{
        const res=await request
        .post('./login')
        .send({username:'sonu',password:'sonu'});
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Login successfull');
        expect(res.body.token).toBeTruthy();
    });
    it('it should fail ',async ()=>{
        const res=await request
        .post('./login')
        .send({username:'asfd',password:'asdf'});
        expect(res.status).not.toBe(200);
        expect(res.body.message).toBe('Login failed');
       
    });
});



describe('it should pass tests - ', () => {

    beforeAll(async () => {
        const res = await request
            .post('/login')
            .send({ username: 'sonu', password: 'sonu' });
        token = res.body.token;
    });

    it('should find the number of employees', async () => {
        const res = await request
            .get('/employees')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
