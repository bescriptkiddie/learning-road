const Koa = require("koa");
const moment = require("moment");

const Router = require("koa-router");

const serve = require("koa-static");

const app = new Koa();

app.use(serve(__dirname + "/static"));

const router = new Router();
router.get("/polling", (ctx) => {
  // 返回当前的时间
  // todo 优化时间戳
  // 格式化时间
  ctx.body = getDate();
});
app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});

function getDate() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}
