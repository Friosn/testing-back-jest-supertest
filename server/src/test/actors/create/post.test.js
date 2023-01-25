const postOne = require('./post.act');

describe('POST /resources', () => {
  it('should create a new resource', async () => {
    const res = await request.post('/resources').send({ name: 'example' });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ message: 'Resource created successfully' });
  });
});
