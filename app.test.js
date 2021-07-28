const request = require('supertest');
const app = require('./app');

describe('Only GET / is valid', () => {
  test('endpoint exists', () => {
    return request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            status: expect.any(String),
          })
        );
      });
  });

  test('endpoint does not exist', () => {
    return request(app)
      .get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
          })
        );
      });
  });
});
