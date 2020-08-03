const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");
const jwt = require("jsonwebtoken");
const koaJwt = require("koa-jwt");
const secret = "mytoken";

const app = new Koa();

app.use(serve(__dirname + "/static"));
app.use(koaJwt({ secret }).unless({ path: [/^\/login/] }));

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();

router.post("/login", (ctx) => {
  // 先验证账号和密码对不对
  const { username, passwd } = ctx.request.body;

  if (username === "h" && passwd === "123") {
    const token = jwt.sign(
      {
        uId: 1,
      },
      secret,
      {
        expiresIn: "2h",
      }
    );

    ctx.body = {
      state: 1,
      msg: "登录成功",
      data: {
        token,
      },
    };
  } else {
    ctx.body = {
      state: 1,
      msg: "账号或者密码不对",
    };
  }
});

router.get("/getData", async (ctx) => {
  //   await delay();
  ctx.body = "get - data - dev";
});

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
