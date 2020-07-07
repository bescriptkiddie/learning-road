import Yase from './heros/Yase.js';

export default class Player{
    constructor(name){
        this.name = name;
        // 英雄
        this.heros = [new Yase];
    }
}