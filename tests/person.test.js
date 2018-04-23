'use strict';

const app = require('../server/server');
const request = require('supertest');

afterAll(() => require('fs').unlinkSync('./test.json'));

describe('API', () => {

  const person = {
    firstname: "Ernest",
    lastname: "Okot",
    email: "okot08@gmail.com",
    password: "password"
  };

  test('it should create user', async () => {
    const register = await request(app)
      .post('/api/people')
      .send(person);

    expect(register.statusCode).toBe(200);
    expect(register.body.email).toBe(person.email);
  });

  test('it should login and logout a user', async () => {
    const login = await request(app)
      .post('/api/people/login?include=user')
      .send({
        email: person.email,
        password: person.password,
      });

    expect(login.statusCode).toBe(200);
    expect(login.body.user.email).toBe(person.email);

    const logout = await request(app)
      .post('/api/people/logout')
      .set('Authorization', login.body.id)
      .send({});

    expect(logout.statusCode).toBe(204);
  });

});
