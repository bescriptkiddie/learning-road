const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");
const jwt = require("jsonwebtoken");
const koaJwt = require('koa-jwt');

const app = new Koa();
const secret = "webtoken123123";

app.use(serve(__dirname + "/static"));
// app.use(koaJwt({
//     secret
// }))

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();
router.post("/login", (ctx) => {
  // 生成钥匙
  const token = jwt.sign(
    {
      uId: "123",
    },
    secret,
    {
      expiresIn: "2h",
    }
  );

  ctx.body = {
    state: 1,
    body: {
      token,
    },
  };
});

router.get("/getData", (ctx) => {
  // 验证钥匙对不对
  const token = ctx.get("Authorization") 
//   jwt.verify(token, secret, (err, decoded) => {
//     if (err) {
//       ctx.throw(err);
//     }

//     ctx.body = {
//       data: {
//         decoded,
//       },
//     };
//   });

  ctx.body = "get - data"
});
app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
