const Koa = require("koa");
const { Sequelize, Op } = require("sequelize");
const getUserModel = require("./userModel");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// 连接
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "123456",
  database: "web09",
});

// users
const UserModel = getUserModel(sequelize);
// 增加
// addUser
// 添加一条数据
router.get("/addUser", async (ctx) => {
  const { age, name } = ctx.query;

  //   const sql = `INSERT INTO users (id,age,name) VALUES (0,?,?)`;
  //   const [rows] = await connection.execute(sql, [age, name]);
  //   if (rows.affectedRows > 0) {
  //     ctx.body = "add success";
  //   } else {
  //     ctx.body = "add fail";
  //   }

  const result = await UserModel.create({
    age,
    name,
  });

  ctx.body = result;
});

// 删除
// delUser
router.get("/delUser", async (ctx) => {
  const { id } = ctx.query;
  //   const sql = `DELETE FROM users WHERE id=?`;
  //   const [rows] = await connection.execute(sql, [id]);
  //   if (rows.affectedRows > 0) {
  //     ctx.body = "del success";
  //   } else {
  //     ctx.body = "del fail";
  //   }
  const result = await UserModel.destroy({
    where: {
      id,
    },
  });

  if (result > 0) {
    ctx.body = "del success";
  } else {
    ctx.body = "del fail";
  }
});

// 修改
// updateUser
router.get("/updateUser", async (ctx) => {
  const { id, age } = ctx.query;
  //   const sql = `UPDATE users SET age=? WHERE id=?`;
  //   const [rows] = await connection.execute(sql, [age, id]);
  //   if (rows.affectedRows > 0) {
  //     ctx.body = "update success";
  //   } else {
  //     ctx.body = "update fail";
  //   }
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
  if (result > 0) {
    ctx.body = "update success";
  } else {
    ctx.body = "update fail";
  }
});

// 查找
// findUser
router.get("/findUser", async (ctx) => {
  const { id } = ctx.query;
  //   const sql = `SELECT * FROM users WHERE id=?`;
  //   const [row] = await connection.execute(sql, [id]);
  //   ctx.body = row[0];

  //   const user = await UserModel.findByPk(id);
  const user = await UserModel.findOne({
    where: {
      id,
    },
  });
  if (user) {
    ctx.body = user;
  } else {
    ctx.body = "没有该用户";
  }
});

// 多查找
// findUsers
router.get("/findUsers", async (ctx) => {
  const { limit = 5, offset = 0, age = 0 } = ctx.query;
  // limit
  // offset
  //   const sql = `SELECT * FROM users WHERE age>? ORDER BY age LIMIT ?,?`;
  //   const [rows] = await connection.execute(sql, [age, offset, limit]);
  //   ctx.body = rows;
  const users = await UserModel.findAll({
    where: {
      age: {
        [Op.gt]: +age,
      },
    },
    order: [["age", "DESC"]],
    limit: +limit,
    offset: +offset,
  });

  ctx.body = users;
});
app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
