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
  //   ctx.body = "get - data";
  ctx.body = {
    state: 1,
    msg: "get - data",
  };
});
router.post("/postData", (ctx) => {
  //   ctx.body = "get - data";
  const { name, age } = ctx.request.body;
  ctx.body = {
    state: 1,
    msg: "post - data",
    data: {
      name,
      age,
    },
  };
});
app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
