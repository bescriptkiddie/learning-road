const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");
const jwt = require("jsonwebtoken");
const koaJwt = require("koa-jwt");

const app = new Koa();
const secret = "mytoken12312321";

app.use(serve(__dirname + "/static"));
app.use(
  koaJwt({
    secret,
  }).unless({ path: [/\/login/] })
);

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();

router.post("/login", (ctx) => {
  // 验证账号和密码
  const { username, password } = ctx.request.body;

  if (username === "h" && password === "123") {
    // 成功
    // token
    const token = jwt.sign({ uId: 1 }, secret, {
      expiresIn: "2h",
    });

    ctx.body = {
      state: 1,
      msg: "login success",
      data: {
        token,
      },
    };
  } else {
    // 失败
    ctx.body = {
      state: 0,
      msg: "login fail",
      data: {},
    };
  }
});

router.get("/getData", (ctx) => {
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
