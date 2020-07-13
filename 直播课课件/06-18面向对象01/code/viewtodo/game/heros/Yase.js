import S11610 from '../skills/yase/s11610.js'
import S11620 from '../skills/yase/s11620.js'
import S11630 from '../skills/yase/s11630.js'
export default class Yase {
    constructor() {
        this.name = "亚瑟";
        // 技能
        this.skills = [new S11610,new S11620,new S11630];
        // 皮肤 
        this.skins = [];
        this.ico = "sources/heros/yase1.png"
    }
}