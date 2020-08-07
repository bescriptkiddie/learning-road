import {
    Controller,
    Get
} from 'koa-ts-controllers';

@Controller('/')
export class Main {

    @Get('/')
    index() {
        return 'index';
    }

    @Get('/login')
    login() {
        return '登陆';
    }

}