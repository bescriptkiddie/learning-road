// koa-static
const Koa = require("koa");

const serve = require("koa-static");
const path = require("path");

const app = new Koa();

app.use(serve(path.resolve(__dirname, "./static"),{
    index:"main.html"
}));

app.listen(8081);
