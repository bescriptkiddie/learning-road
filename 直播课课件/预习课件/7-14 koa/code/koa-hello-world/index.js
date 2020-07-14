const Koa = require("koa");

// application
const app = new Koa();

app.use((ctx) => {
    // context -> 上下文对象
    // request 请求对象
    // response 响应对象
    // ctx.request
    // ctx.response
    // res  req
    // ctx.res
    // ctx.req
//   ctx.body = "hello koa";
    // ctx.body = "你好 世界"
    // ctx.body = {
    //     msg:"你好 世界"
    // }
    // ctx.response.body = {
    //     msg:"nihao"
    // }
    // ctx.body = ctx.response.body
});


app.listen(9090)
