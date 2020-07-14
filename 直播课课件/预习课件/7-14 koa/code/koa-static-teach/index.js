const Koa = require("koa");
const serve = require("koa-static");

const app = new Koa();
const serveOptions = {
  index: "main.html",
};
app.use(serve(__dirname + "/static", serveOptions));

app.listen(9090);
