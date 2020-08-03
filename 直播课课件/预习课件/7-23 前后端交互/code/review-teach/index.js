const Koa = require("koa");
const koaBody = require("koa-body");
const serve = require("koa-static");
const Router = require("koa-router");

const app = new Koa();
app.use(koaBody());
app.use(serve(__dirname + "/static"));
const router = new Router();

router.get("/getData", (ctx) => {
  const { name, age } = ctx.query;
  ctx.body = {
    state: 1,
    msg: "get - data",
    data: {
      name,
      age,
    },
  };
});

router.post("/postData", (ctx) => {
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
app.listen(9005);
