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
  ctx.body = {
    msg: "get - data",
  };
});

router.post("/postData", (ctx) => {
  ctx.body = {
    msg: "post - data",
    data: {
      ...ctx.request.body,
    },
  };
});
app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
