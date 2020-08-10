import { Post } from '../kkb/index'

export default class UserController {
  @Post('/login')
  public login(ctx) {
    console.log('login')
    ctx.body = {
      status: 200,
      msg: '通过postman进来了',
    }
  }
}
