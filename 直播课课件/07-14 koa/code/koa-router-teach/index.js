const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'hello router'
})

router.get('/users', (ctx) => {
  // query
  const { id } = ctx.query
  ctx.body = `id: ${id}`
})

// /users/1  /2
router.get('/users/:id', (ctx) => {
  const { id } = ctx.params
  ctx.body = `id: ${id}`
})

app.use(router.routes())
app.listen(8081)
