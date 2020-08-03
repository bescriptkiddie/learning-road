const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const koaBody = require('koa-body')
const jwt = require('jsonwebtoken')
const koaJwt = require('koa-jwt')
const secret = '12l3k1j23l12kjdsafdmysslksj'

const app = new Koa()

app.use(serve(__dirname + '/static'))

app.use(
  koaJwt({
    secret,
  }).unless({
    path: [/^\/login/],
  }),
)

app.use(
  koaBody({
    multipart: true,
  }),
)

const router = new Router()

router.post('/login', (ctx) => {
  // 先验证账号和密码
  const { username, passwd } = ctx.request.body
  if (username === 'h' && passwd === '123') {
    const token = jwt.sign({ uId: 1 }, secret, {
      expiresIn: '2h',
    })

    ctx.body = {
      state: 1,
      msg: 'login success',
      data: {
        token,
      },
    }
  } else {
    ctx.body = {
      state: 0,
      msg: 'login fail',
      data: {},
    }
  }
})

router.get('/getData', (ctx) => {
  // 1. 验证 token 是否合法
  // authentication
  const token = ctx.get('Authorization')
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      ctx.body = {
        state: 0,
        msg: '登录失败',
        data: {},
      }
      return
    }

    ctx.body = {
      state: 0,
      msg: '登录成功',
      data: {
        decoded,
      },
    }
  })
  ctx.body = { name: '111' }
})

app.use(router.routes())

app.listen(8081, () => {
  console.log('open server localhost:8080')
})
