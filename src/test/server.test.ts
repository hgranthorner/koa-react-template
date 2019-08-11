import request from 'supertest'
import server from '../server/app'
const testServer = server.listen(3001)
const app = request(testServer)

describe('Server', () => {
  afterAll(() => {
    testServer.close()
  })

  it('can accepts responses', async () => {
    const response = await  app.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('hello')
  })

    /*
  it('does not accept invalid responses', () => {
    return app.get('/not/a/real/path')
      .expect(404)
      .catch(e => console.log(e))
  })
     */

})
