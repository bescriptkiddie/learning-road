const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");

const app = new Koa();

app.use(serve(__dirname + "/static"));

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();
router.get("/getData", (ctx) => {
  ctx.body = "get - data - 8081";
});
router.post("/postData", (ctx) => {
  ctx.body = "post - data - 8081";
});

// a
// b
// c
// 100个
app.use(router.routes());

app.listen(8081, () => {
  console.log("open server localhost:8081");
});
