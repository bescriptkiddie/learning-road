const Koa = require("koa");
const views = require("koa-views");

const app = new Koa();
app.use(views(__dirname+"/views",{
    extension:"pug"
}))

app.use(async(ctx) => {
//   ctx.body = "nihao";
    await ctx.render("index",{
        msg:"nihao"

    })
});

app.listen(9090);
