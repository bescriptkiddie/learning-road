const Koa = require("koa");
const Router = require("koa-router");

const koaBody = require("koa-body");

const app = new Koa();

app.use(koaBody());

const router = new Router();

// 对用户进行操作
// addUser
// findUser
// updateUser
// deleteUser

let id = 10;
const createId = () => {
  return id++;
};

// users
let users = [
  {
    id: 1,
    name: "xiaohong",
    age: 18,
  },

  {
    id: 2,
    name: "xiaohei",
    age: 18,
  },
];

// RESTFul
// 查找  get         /users/:id
router.get("/users/:id", (ctx) => {
  // id
  const { id } = ctx.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    ctx.throw(404, "用户不存在");
  }

  ctx.body = user;
});

// 增加  post        /users
router.post("/users", (ctx) => {
  // id
  // body
  // 用户给的数据
  const { name, age } = ctx.request.body;
  const newUser = {
    id: createId(),
    name,
    age,
  };

  users.push(newUser);
  ctx.body = users;
});

// 删除  delete      /users/:id
// 修改（更新） put   /users/:id

app.use(router.routes());
app.listen(8081);
