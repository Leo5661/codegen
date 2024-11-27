import request from 'supertest'
import app from '../src/app'

describe('GET /api/hello', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/api/hello')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Hello, World!')
  })
})
