const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
    // ctx -> context 上下文对象
    // ctx.request 请求对象
    // ctx.response 响应对象
    // res
    // req
    // ctx.res
    // ctx.req
//   ctx.body = "你好 世界";
//   ctx.body = {
//       msg:"你好 世界"
//   };
  // end()

//   ctx.body = "hello world";
// 发给浏览器的 都找响应对象
// 浏览器发过来的 都找请求对象
    ctx.response.body = "hello world"
  
});
app.listen(8081);
