import S11610 from '../skills/yase/s11610.js'
import S11620 from '../skills/yase/s11620.js'
import S11630 from '../skills/yase/s11630.js'

export default class Yase {
    constructor() {
        this.name = "亚瑟";
        // 技能
        this.skills = [new S11610, new S11620, new S11630];
        // 皮肤
        this.skins = ["sources/skins/301660.png","sources/skins/301661.png","sources/skins/301662.png"];
        this.ico = ["sources/heros/yase1.png","sources/heros/yase2.png","sources/heros/yase3.png"]
    }
}
