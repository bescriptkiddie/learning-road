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
  // const uId = ctx.cookies.get("uId");
  // console.log(uId);
  ctx.body = 'get - data - 8080'
})

router.get('/login', (ctx) => {
  // 后端可以设置 cookie
  ctx.cookies.set('uId', 1)
  ctx.body = 'login - data - 8080'
})

app.use(router.routes())

app.listen(8080, () => {
  console.log('open server localhost:8080')
})
