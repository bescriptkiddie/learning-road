const Koa = require("koa");

const Router = require("koa-router");

const serve = require("koa-static");

const koaBody = require("koa-body");
const axios = require('axios');
const proxy = require('koa-server-http-proxy');

const app = new Koa();

app.use(serve(__dirname + "/static"));

// http://localhost:8080/api/getData
// http://localhost:8081/getData
app.use(proxy("/api",{
    target:"http://localhost:8081",
    pathRewrite:{
        "^/api":""
    }
}))
app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();
// 当前服务器是 8080
// router.get("/getData",async (ctx) => {
//   // 帮助我们去请求 8081 数据
//   const res = await axios.get("http://localhost:8081/getData")
//   ctx.body = res.data;
// });


app.use(router.routes());

app.listen(8080, () => {
  console.log("open server localhost:8080");
});
