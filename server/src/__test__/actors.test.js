const supertest = require('supertest');
const app = require('../../index');
const mongoose = require('mongoose');
const Actor = require('../api/models/actors.model');

//Primera prueba

describe('GET /actors', () => {
  it('should get all actors', async () => {
    const res = await request(app).get('/api/actors');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockDB.Actor.endpoints[0].response);
  });
});
