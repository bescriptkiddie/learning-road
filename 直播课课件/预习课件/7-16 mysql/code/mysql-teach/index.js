const Koa = require("koa");

const Router = require("koa-router");

const mysql = require("mysql2/promise");

const app = new Koa();

const router = new Router();

(async () => {
  // 1. 如何连接到 nodejs -> mysql
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "web08",
  });

  // users
  // 增删改查
  // get
  // /findUser
  // /findUsers

  // /addUser
  router.get("/addUser", async (ctx) => {
    // 添加数据到 db
    const { name, age } = ctx.query;
    const sql = `INSERT INTO users (id,name,age) VALUES (0,?,?)`;
    const [rows] = await connection.execute(sql, [name, age]);
    if (rows.affectedRows === 1) {
      ctx.body = "add user success";
    } else {
      ctx.body = "add user fail";
    }
  });

  // /delUser
  router.get("/delUser", async (ctx) => {
    const { id } = ctx.query;
    const sql = `DELETE FROM users WHERE id=?`;
    const [rows] = await connection.execute(sql, [id]);
    if (rows.affectedRows === 1) {
      ctx.body = "del user success";
    } else {
      ctx.body = "del user fail";
    }
  });

  // /updateUser
  router.get("/updateUser", async (ctx) => {
    const { id, age } = ctx.query;
    const sql = `UPDATE users SET age=? WHERE id=?`;
    const [rows] = await connection.execute(sql, [age, id]);
    ctx.body = rows;
  });

  // /findUser
  router.get("/findUser", async (ctx) => {
    const { id } = ctx.query;
    const sql = `SELECT * FROM users WHERE id=?`;
    const [rows] = await connection.execute(sql, [id]);
    ctx.body = rows[0];
  });

  // /findUsers
  router.get("/findUsers", async (ctx) => {
    const { age = 0, offset = 0, limit = 5 } = ctx.query;
    const sql = `SELECT * FROM users WHERE age>? ORDER BY age DESC  LIMIT ?,?`;
    const [rows] = await connection.execute(sql, [age, offset, limit]);
    ctx.body = rows;
  });
})();

app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
