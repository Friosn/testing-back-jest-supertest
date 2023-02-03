/* const request = require('supertest');
const app = require('../../../../index');
const router = require('./post.act');
const Actor = require('../../../api/models/actors.model');

jest.mock('../../../api/models/actors.model', () => {
  return jest.fn().mockImplementation(() => {
    return {
      name: 'Mocked Actor',
      age: 30,
      img: 'mocked_path',
    };
  });
});

describe('POST /actors', () => {
  it('should create a new actor', async () => {
    const res = await request(app)
      .post('/actors/')
      .send({ name: 'John', age: 25, img: 'invented' });
    expect(Actor).toHaveBeenCalled();
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      name: 'Mocked Actor',
      age: 30,
      img: 'mocked_path',
    });
  });
}); */
