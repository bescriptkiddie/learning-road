const Koa = require('koa')
const serve = require('koa-static')
const koaBody = require('koa-body')
const views = require('koa-views')
const Router = require('koa-router')
const { initDB } = require('./db')
const { newsRouter, adminRouter } = require('./router')
// const newsRouter = require("./router/news.router.js")
// const adminRouter = require("./router/admin.router.js")
initDB()
const app = new Koa()
app.use(serve(__dirname + '/static'))

app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  }),
)

app.use(
  koaBody({
    multipart: true,
  }),
)

app.use(newsRouter.routes())
app.use(adminRouter.routes())
const router = new Router()
router.get('/', (ctx) => {
  ctx.body = 'hello koa'
})
app.use(router.routes())
app.listen(8080, () => {
  console.log('open server localhost:8080')
})
