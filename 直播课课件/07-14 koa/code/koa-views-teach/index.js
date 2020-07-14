const Koa = require("koa");
const views = require("koa-views");

const path = require("path");
const app = new Koa();

// 路径
// __dirname

// 绝对路径
app.use(
  views(path.resolve(__dirname, "./views"), {
    extension: "pug",
  })
);

app.use(async (ctx) => {
  await ctx.render("index",{
      web:"hahahaha"
  });
});

app.listen(8081)
