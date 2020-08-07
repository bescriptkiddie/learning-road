const Koa = require('koa')

const Router = require('koa-router')

const serve = require('koa-static')

const koaBody = require('koa-body')

const app = new Koa()

app.use(serve(__dirname + '/static'))

app.use(
  koaBody({
    multipart: true,
  }),
)

const router = new Router()
router.get('/getData', (ctx) => {
  console.log('getData')
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.body = 'get - data - 8081'
})

router.get('/login', (ctx) => {
  // 后端可以设置 cookie
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.cookies.set('uId', 1)

  ctx.body = 'login - data - 8081'
})

//非简单请求
router.options('/postData', (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'POST')
  ctx.set('Access-Control-Allow-Headers', 'content-type')
  ctx.body = ''
})

router.post('/postData', (ctx) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = 'post - data - 8081'
})

app.use(router.routes())

app.listen(8081, () => {
  console.log('open server localhost:8081')
})
