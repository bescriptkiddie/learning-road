const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  // 302
  ctx.status = 302;
  ctx.set("location", "https://bing.com");
});

app.listen(8081);
