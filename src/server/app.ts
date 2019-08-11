import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import session from 'koa-session'

const app = new Koa()
const router = new Router()

// Middleware

app.keys = ['secrets']
app.use(serve('./dist'))
app.use(session(app))

router.get('/', async (ctx, next) => {
  ctx.body.message = 'hello'
  next()
})

router.get('/test', async (ctx, next) => {
  ctx.status = 200
  ctx.body = { message: 'hello' }
})

app.use(router.routes())
  .use(router.allowedMethods())

export default app
