import {
    Get,
    Post
} from '../libs/KKB';

export default class Main {


    @Get('/')
    index() {
        // console.log('index');
        // ctx.body = 'index';
        return 'index';
    }

    @Post('/login')
    login() {
        // console.log('login');
        // ctx.body = 'login';
        return 'login';
    }

}