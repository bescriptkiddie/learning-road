const Koa = require("koa");
const serve = require("koa-static");
const Router = require("koa-router");
const moment = require("moment");

const app = new Koa();

app.use(serve(__dirname + "/static"));

const router = new Router();

router.get("/polling", (ctx) => {
  // 不美观
  // 2020-05-26 20:22:22
  ctx.body = moment().format("YYYY-MM-DD HH:mm:ss"); //Date.now();
});

app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
