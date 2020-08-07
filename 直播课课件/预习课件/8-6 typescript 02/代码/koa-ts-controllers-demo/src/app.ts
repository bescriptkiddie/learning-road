import {bootstrapControllers} from 'koa-ts-controllers';
import Koa from 'koa';
import Router from 'koa-router';
 
const app = new Koa();
const router = new Router();
 
~ async function() {
    await bootstrapControllers(app, {
        router,
        basePath: '/api',
        controllers: [__dirname + '/controllers/**/*.ts'],
        versions:{
            1: 'This version is deprecated and will soon be removed. Consider migrating to version 2 ASAP',
            2: true,
            dangote: true
        },
        errorHandler: async (err, ctx) => {
            console.log('err', err);
            ctx.body = { error: err}
            ctx.status = 500
        }
    });
     
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(7777);
}()