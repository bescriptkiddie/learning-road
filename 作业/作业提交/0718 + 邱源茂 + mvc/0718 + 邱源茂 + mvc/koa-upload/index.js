const Koa = require('koa')
const serve = require('koa-static')
const koaBody = require('koa-body')
const views = require('koa-views')
const Router = require('koa-router')
const { initDB } = require('./db')
const { uploadRouter } = require('./router')

initDB()
const app = new Koa()
app.use(serve(__dirname + '/static'))

app.use(
  views(__dirname + '/views', {
    extension: 'html',
  }),
)

app.use(
  koaBody({
    multipart: true,
  }),
)

app.use(uploadRouter.routes())
const router = new Router()

// router.get('/', (ctx) => {
//   ctx.body = 'hello koa'
// })

app.use(router.routes())
app.listen(8081, () => {
  console.log('open server localhost:8081')
})
