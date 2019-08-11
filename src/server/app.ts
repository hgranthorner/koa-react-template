import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import serve from 'koa-static'
import path from 'path'

const app = new Koa()
const router = new Router()

// Middleware

app.use(serve('./dist'))

router.get('/', async (ctx, next) => {
  ctx.body = 'hello message'
  next()
})

router.get('/test', async (ctx, next) => {
  ctx.status = 200
  ctx.body = { message: 'hello' }
})

app.use(router.routes())
  .use(router.allowedMethods())

export default app
