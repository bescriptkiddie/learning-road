const Koa = require("koa");

const app = new Koa();

// 中间件
// 添加中间件
// app.use((ctx, next) => {
//   console.log(">>>> fn1");
//   next();
//   console.log("<<<< fn1");
//   ctx.body = "fn1"
// });

// app.use((ctx, next) => {
//   console.log(">>>> fn2");
//   next()
//   console.log("<<<< fn2");
//   ctx.body = "fn2"
// });

// app.use((ctx, next) => {
//   console.log(">>>> fn3");
//   next()
//   console.log("<<<< fn3");
// });

// log 日志
// app.use(async (ctx, next) => {
//   const startTime = Date.now();
//   await next();
//   console.log("time:", Date.now() - startTime);
// });

// app.use(async (ctx) => {
//   await delay();
//   ctx.body = "hahahah ";
// end
// });

// function delay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });
// }

// 在多个中间件内传递参数
app.use((ctx, next) => {
  ctx.kkb = {
    name: "hahah",
  };
  next()
});

app.use((ctx) => {
  console.log(ctx.kkb.name);
});

app.listen(8081);
