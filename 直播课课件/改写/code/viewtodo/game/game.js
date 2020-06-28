import Player from './player.js';
// 游戏管理类
export default class Game{
    constructor(){
        this.player = "";
    }
    login(name){
        // 登录；-->实例化玩家
        this.player = new Player(name);
    }
}
