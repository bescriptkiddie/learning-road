import KoaRouter from 'koa-router';
import glob from 'glob';
import MainController from '../controllers/main';


interface KKBOptions {
    // 设置控制器文件存在的目录
    controllersPath: string;
    // 路由对象
    router: KoaRouter;
}

// let arr = {
//     main: [
//         {
//             verb: 'get',
//             url: '/',
//             method: MainController.index
//         }
//     ],
//     user: [
//         ...
//     ]
// }

export default class KKB {

    // private options: KKBOptions;

    constructor(private options: KKBOptions) {
        // this.options = options;

        // 根据options.controllersPath加载所有的controller文件
        this.loadControllers();
    }

    private loadControllers() {

        let controllerFiles = glob.sync(this.options.controllersPath);

        console.log('controllerFiles', controllerFiles);

        // 循环所有的controller文件，并加载，进行实例化，然后把实例化以后的方法与对应的路由（url）进行绑定
        controllerFiles.forEach( controllerFile => {
            // console.log('controllerFile', controllerFile);
            // let Controler = await import(controllerFile);

            let Controller = require(controllerFile).default;

            // console.log('Controller', Controller);

            let controller = new Controller();

            // controller.__controllers = [
            //     {
            //         verb: 'get',
            //         url: '/',
            //         name: 'index'
            //     },
            //     {
            //         verb: 'post',
            //         url: '/login',
            //         name: 'login'
            //     }
            // ];

            // controller.index;

            // if ( controller.index ) {
            //     this.options.router.get('/', controller.index);
            // }

            // 当前的控制器对象的哪些方法与哪些url进行绑定
            // console.log('controller', controller.__controllers);

            if (controller.__controllers) {
                controller.__controllers.forEach( __controller => {
                    this.options.router[__controller.verb](
                        __controller.url, 
                        controller[__controller.name]
                    );
                } );
            }
            
        } );

    }

}

export function Get(url: string) {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        // __controllers 存储的就是当前 target 中的所有 方法 与 对应的url
        if (!target.__controllers) {
            target.__controllers = [];
        }
        target.__controllers.push({
            verb: 'get',
            url,
            name
        });
    }
}

export function Post() {
    // 你们的代码就写在这里面，记得这里的代码要截图 - 赠小乐！
}