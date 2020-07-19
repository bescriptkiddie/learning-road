const Koa = require('koa')
const mysql = require('mysql2/promise')
const Router = require('koa-router')

const app = new Koa()

const router = new Router()

;(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'web09',
  })

  // get
  // 增删改查
  // users

  // 增加
  // addUser
  // 添加一条数据
  router.get('/addUser', async (ctx) => {
    const { age, name } = ctx.query

    const sql = `INSERT INTO users (id,age,name) VALUES (0,?,?)`
    const [rows] = await connection.execute(sql, [age, name])
    if (rows.affectedRows > 0) {
      ctx.body = 'add success'
    } else {
      ctx.body = 'add fail'
    }
  })

  // 删除
  // delUser
  router.get('/delUser', async (ctx) => {
    const { id } = ctx.query
    const sql = `DELETE FROM users WHERE id=?`
    const [rows] = await connection.execute(sql, [id])
    if (rows.affectedRows > 0) {
      ctx.body = 'del success'
    } else {
      ctx.body = 'del fail'
    }
  })

  // 修改
  // updateUser
  router.get('/updateUser', async (ctx) => {
    const { id, age } = ctx.query
    const sql = `UPDATE users SET age=? WHERE id=?`
    const [rows] = await connection.execute(sql, [age, id])
    if (rows.affectedRows > 0) {
      ctx.body = 'update success'
    } else {
      ctx.body = 'update fail'
    }
  })

  // 查找
  // findUser
  router.get('/findUser', async (ctx) => {
    const { id } = ctx.query
    const sql = `SELECT * FROM users WHERE id=?`
    const [row] = await connection.execute(sql, [id])
    ctx.body = row[0]
  })

  // 多查找
  // findUsers
  router.get('/findUsers', async (ctx) => {
    const { limit = 5, offset = 0, age = 0 } = ctx.query
    // limit
    // offset
    const sql = `SELECT * FROM users WHERE age>? ORDER BY age LIMIT ?,?`
    const [rows] = await connection.execute(sql, [age, offset, limit])
    ctx.body = rows
  })
})()

app.use(router.routes())

app.listen(8080, () => {
  console.log('open server localhost:8080')
})
