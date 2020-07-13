import Hero from './Hero.js';

import S11610 from '../skills/yase/s11610.js'
import S11620 from '../skills/yase/s11620.js'
import S11630 from '../skills/yase/s11630.js'

// 引入皮肤
import Skin1 from '../skins/yase/skin1.js'
import Skin2 from '../skins/yase/skin2.js'
import Skin3 from '../skins/yase/skin3.js'


export default class Yase extends Hero {
    constructor() {
        super("亚瑟",[new S11610,new S11620,new S11630],"sources/heros/yase1.png");
        this.blood = 5000;
        // this.name = "亚瑟";
        // // 技能
        // this.skills = [new S11610,new S11620,new S11630];
        
        // this.ico = "sources/heros/yase1.png"

        // 皮肤 
        this.skins = [new Skin1,new Skin2,new Skin3];
    }
    fire(){
        console.log("开火了...");
    }
}