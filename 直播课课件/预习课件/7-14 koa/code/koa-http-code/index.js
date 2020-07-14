
const Koa = require('koa');


const app = new Koa()


app.use((ctx)=>{
    // 设置返回的状态码
    ctx.status = 302
    // 设置响应头
    ctx.set("location","https://www.bing.com")
})

app.listen(9090)