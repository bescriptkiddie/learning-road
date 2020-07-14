const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  // 记录请求-响应的总时间
  ctx.state = {
    name: "nihao",
  };
  const start = Date.now();
  await next();
  console.log("时间：", Date.now() - start);
});

app.use(async (ctx) => {
  console.log(ctx.state.name);
  await delay();
  ctx.body = "nihao";
});

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

// app.use((ctx,next) => {
//     console.log(">>>>> fn1")
//     next()
//     ctx.body = "fn1"
//     console.log("<<<< fn1")
// });

// app.use((ctx,next) => {
//     console.log(">>>>> fn2")
//     next()
//     ctx.body = "fn2"
//     console.log("<<<< fn2")
// });

// app.use((ctx,next) => {
//     console.log(">>>>> fn3")
//     next()
//     console.log("<<<< fn3")
// });

app.listen(9090);
