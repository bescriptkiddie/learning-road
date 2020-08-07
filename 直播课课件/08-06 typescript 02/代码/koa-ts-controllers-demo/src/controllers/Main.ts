import {Controller, Get, Version} from 'koa-ts-controllers';

@Controller('/')
class MainController {

    // 用类来管理 controller ，controller 中的方法与对应的 url 进行关联
    // /test
    @Get('/test')
    public index() {
        return 'Hello';
    }

    @Get('/test')
    @Version('2')
    public index2() {
        return '你好';
    }

}