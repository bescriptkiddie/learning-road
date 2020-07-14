const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");

const app = new Koa();
app.use(koaBody());

const router = new Router();
// 需求
// users 表
// 增加
// 删除
// 修改
// 查

// 普通
// addUser
// deleteUser
// updateUser
// findUser

// RESTFul

let users = [
  {
    id: 1,
    name: "小红",
    age: 19,
  },

  {
    id: 2,
    name: "小名",
    age: 20,
  },
];

// get  localhost:9090/users/:id 查找
router.get("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const user = users.find((data) => data.id == id);
  console.log(user);

  if (!user) {
    ctx.throw(404, "用户找不到");
  }

  ctx.body = user;
});

// post localhost:9090/users/:id 创建
router.post("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const { name, age } = ctx.request.body;
  const user = {
    id,
    name,
    age,
  };
  users.push(user);
  ctx.body = users;
});

// put  localhost:9090/users/:id 更新
router.put("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const { name, age } = ctx.request.body;

  const user = users.find((data) => data.id == id);
  if (name) {
    user.name = name;
  }
  if (age) {
    user.age = age;
  }

  ctx.body = user;
});
// del  localhost:9090/users/:id 删除
// delete
router.del("/users/:id", (ctx) => {
  const { id } = ctx.params;
   users = users.filter((data) => data.id != id);

  ctx.body = users;
});

// router.get()
app.use(router.routes());

app.listen(9090);
