const Koa = require("koa");
const { Sequelize, Op } = require("sequelize");
const getUserModel = require("./user-model");
const Router = require("koa-router");

const app = new Koa();

const router = new Router();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "123456",
  database: "web08",
});

const UserModel = getUserModel(sequelize);

// users
// 增删改查
// get
// /findUser
// /findUsers

// /addUser
router.get("/addUser", async (ctx) => {
  // 添加数据到 db
  const { name, age } = ctx.query;
  // const sql = `INSERT INTO users (id,name,age) VALUES (0,?,?)`;
  // const [rows] = await connection.execute(sql, [name, age]);
  // if (rows.affectedRows === 1) {
  //   ctx.body = "add user success";
  // } else {
  //   ctx.body = "add user fail";
  // }
  const result = await UserModel.create({
    name,
    age,
  });
  // console.log(result)
  ctx.body = result;
});

// /delUser
router.get("/delUser", async (ctx) => {
  const { id } = ctx.query;
  // const sql = `DELETE FROM users WHERE id=?`;
  // const [rows] = await connection.execute(sql, [id]);
  // if (rows.affectedRows === 1) {
  //   ctx.body = "del user success";
  // } else {
  //   ctx.body = "del user fail";
  // }
  const result = await UserModel.destroy({
    where: {
      id,
    },
  });

  if (result === 1) {
    ctx.body = "del user success";
  } else {
    ctx.body = "del user fail";
  }
});

// /updateUser
router.get("/updateUser", async (ctx) => {
  const { id, age } = ctx.query;
  // const sql = `UPDATE users SET age=? WHERE id=?`;
  // const [rows] = await connection.execute(sql, [age, id]);
  // ctx.body = rows;
  const [result] = await UserModel.update(
    {
      age,
    },
    {
      where: {
        id,
      },
    }
  );

  if (result === 1) {
    ctx.body = "update user success";
  } else {
    ctx.body = "update user fail";
  }
});

// /findUser
router.get("/findUser", async (ctx) => {
  const { id } = ctx.query;
  // const sql = `SELECT * FROM users WHERE id=?`;
  // const [rows] = await connection.execute(sql, [id]);
  // ctx.body = rows[0];

  // primaryKey
  const model = await UserModel.findByPk(id);
  ctx.body = model;
});

// /findUsers
router.get("/findUsers", async (ctx) => {
  const { age = 0, offset = 0, limit = 5 } = ctx.query;
  // const sql = `SELECT * FROM users WHERE age>? ORDER BY age DESC  LIMIT ?,?`;
  // const [rows] = await connection.execute(sql, [age, offset, limit]);
  // ctx.body = rows;
  const models = await UserModel.findAll({
    where: {
      age: {
        [Op.gt]: age,
      },
    },
    order: [["age", "DESC"]],
    offset: +offset,
    limit: +limit,
  });

  ctx.body = models;
});

router.get("/", (ctx) => {
  ctx.body = "hello sequelize-teach";
});

app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
