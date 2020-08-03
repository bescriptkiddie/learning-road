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
  ctx.set("Access-Control-Allow-Origin","*")
  ctx.body = "get - data - prod";
});
app.use(router.routes());

app.listen(8081, () => {
  console.log("open server localhost:8081");
});
