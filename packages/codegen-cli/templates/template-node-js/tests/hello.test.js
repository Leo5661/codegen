const request = require('supertest');
const express = require('express');
const helloRoutes = require('../src/routes/helloRoutes');

const app = express();
app.use('/api/hello', helloRoutes);

describe('GET /api/hello', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, World!');
  });
});
