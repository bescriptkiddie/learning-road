import Koa from 'koa';
import KoaRouter from 'koa-router';
import path from 'path';
import glob from 'glob';

interface KKBOptions {
    baseURL: string;
    controllersDir: string;
}

export default class KKB {

    private options: KKBOptions;
    private app: Koa;
    private router: KoaRouter;

    constructor(
        options: KKBOptions
    ) {

        options.controllersDir = path.resolve(__dirname, options.controllersDir);

        this.options = {...options};
        
        this.app = new Koa();
        this.router = new KoaRouter();

        this.loadControllers();
    }

    private loadControllers() {

        let controllerFiles = glob.sync(this.options.controllersDir);

        controllerFiles.forEach( async file => {

            let Controller = (await import(file)).default;
            // console.log(Controller)

            let controller = new Controller();

            console.log(controller.__routes);

            // this.router.get('/', controller.index);

            controller.__routes.forEach( route => {
                this.router[route.verb](
                    this.options.baseURL + route.url, 
                    function(ctx: Koa.Context) {
                        let body = controller[route.name]();

                        ctx.body = body;
                    }
                );
            } );


            this.app.use( this.router.routes() );

        })


    }

    start(port: number) {
        this.app.listen(port);
    }

}


export const Get = (url: string) => {
    return function(
        target: any,
        name: string
    ) {

        if (!target.__routes) {
            target.__routes = [];
        }

        target.__routes.push({
            verb: 'get',
            name,
            url
        });

    }
}

export const Post = (url: string) => {
    // 完成这里都逻辑
}