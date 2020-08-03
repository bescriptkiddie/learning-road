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

router.options("/postData", (ctx) => {
  // Access-Control-Allow-Methods
  ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
  ctx.set("Access-Control-Allow-Methods", "POST");
  //Access-Control-Allow-Headers
  ctx.set("Access-Control-Allow-Headers", "content-type");
  ctx.body = "";
});

router.post("/postData", (ctx) => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
  const { name, passwd } = ctx.request.body;
  ctx.body = {
    name,
    passwd,
  };
});

router.post("/login", (ctx) => {
  // 用户名和密码校验
  ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
  ctx.set("Access-Control-Allow-Credentials", true);
  ctx.cookies.set("uId", 1);
  ctx.body = "login ok";
});

router.get("/getData", (ctx) => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
  // 允许带 cookie
  ctx.set("Access-Control-Allow-Credentials", true);
  // Content-Language
  ctx.set("Content-Language", "ch");
  ctx.set("Access-Control-Export-Headers", "Content-Language");
  ctx.body = "get - data - 8081";
});
app.use(router.routes());

app.listen(8081, () => {
  console.log("open server localhost:8081");
});
