const Koa = require('koa')

const Router = require('koa-router')

const serve = require('koa-static')
const proxy = require('koa-server-http-proxy')

const koaBody = require('koa-body')
const axios = require('axios')

const app = new Koa()

// http://localhost:8080/api/getData
// http://localhost:8081/getData
app.use(
  proxy('/api', {
    target: 'http://localhost:8081',
    pathRewrite: {
      //正则匹配
      '^/api': '',
    },
  }),
)
app.use(serve(__dirname + '/static'))

app.use(
  koaBody({
    multipart: true,
  }),
)

// const router = new Router()
// router.get('/getData', async (ctx) => {
//   // 我们这个同源服务
//   // 帮助我们请求 8081 接口 -->绕过浏览器同源策略
//   const res = await axios.get('http://localhost:8081/getData')
//   ctx.body = res.data
// })

// router.post("/postData", async (ctx) => {
//   // 我们这个同源服务
//   // 帮助我们请求 8081 接口
//   const res = await axios.post("http://localhost:8081/postData");
//   ctx.body = res.data;
// });
// app.use(router.routes())

app.listen(8080, () => {
  console.log('open server localhost:8080')
})
