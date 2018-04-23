'use strict';

const app = require('../server/server');
const request = require('supertest');

afterAll(() => require('fs').unlinkSync('./test.json'));

describe('Application', () => {

  test('it should show application status', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });

});
