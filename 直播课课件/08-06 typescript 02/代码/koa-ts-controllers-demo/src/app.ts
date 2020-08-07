import Koa from 'koa';
import KoaRouter from 'koa-router';
import {bootstrapControllers} from 'koa-ts-controllers';

(async function() {
    const app = new Koa();
    const router = new KoaRouter();

    await bootstrapControllers(app, {
        router,
        basePath: '/api',
        controllers: [ __dirname + '/controllers/**/*.ts'],
        versions: [1, 2]
    });


    // 类 - 管理所有的 controller：处理用户请求逻辑
    // router.get('/test', async ctx => {
    //     ctx.body = 'Hello KaiKeBa';
    // });

    app.use( router.routes() );

    app.listen(8081, () => {
        console.log('Server is running on 8081 : http://localhost:8081')
    });
})()