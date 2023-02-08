const supertest = require('supertest');
const { app, server } = require('../../index');
const mongoose = require('mongoose');
const Actor = require('../api/models/actors.model');

//Primera prueba
const api = supertest(app);

test('Notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(() => {
  mongoose.connection.close();
  server.close();
});

/* describe('GET /actors', () => {
  it('should get all actors', async () => {
    const res = await request(app).get('/api/actors');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockDB.Actor.endpoints[0].response);
  });
});
 */
