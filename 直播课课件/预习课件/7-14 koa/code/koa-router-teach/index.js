const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const router = new Router();

router.redirect("/home","/")

router.get("/", (ctx) => {
  ctx.body = "hello koa router";
});

router.get("/users/:id",(ctx) => {
    const {id} = ctx.params
    ctx.body  = `user - ${id}`
})





app.use(router.routes());


app.listen(9090)
