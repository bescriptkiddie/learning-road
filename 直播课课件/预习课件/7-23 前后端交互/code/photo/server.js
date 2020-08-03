const Koa = require("koa");
const serve = require("koa-static");
const koaBody = require("koa-body");
const Router = require("koa-router");

const app = new Koa();
app.use(
  koaBody({
    multipart: true,
  })
);
app.use(serve(__dirname + "/static"));
const router = new Router();

router.post("/upload", (ctx) => {
  console.log(ctx.request.files);
  ctx.body = "上传成功";
});

app.use(router.routes());
app.listen(8081);
