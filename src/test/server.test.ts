import request from 'supertest'
import server from '../server/server'

const app = request(server)

describe('Server', () => {
  afterAll(() => {
    server.close()
  })

  it('can accepts responses', () => {
    return app.get('/')
      .expect(200)
  })

  it('does not accept invalid responses', () => {
    return app.get('/not/a/real/path')
      .expect(404)
  })

})
